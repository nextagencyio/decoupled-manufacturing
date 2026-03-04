import HomepageRenderer from './components/HomepageRenderer'
import SetupGuide from './components/SetupGuide'
import ContentSetupGuide from './components/ContentSetupGuide'
import { Metadata } from 'next'
import { headers } from 'next/headers'
import { getServerApolloClient } from '../lib/apollo-client'
import { GET_HOMEPAGE_DATA } from '../lib/queries'
import { HomepageData } from '../lib/types'
import { checkConfiguration } from '../lib/config-check'

// Enable ISR with 1 hour revalidation
export const revalidate = 3600

async function getHomepageData(apolloClient: ReturnType<typeof getServerApolloClient>): Promise<HomepageData | null> {
  try {
    const { data } = await apolloClient.query<HomepageData>({
      query: GET_HOMEPAGE_DATA,
      fetchPolicy: 'cache-first',
    })
    return data
  } catch (error) {
    console.error('Error fetching homepage data:', error)
    return null
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Steelpoint Manufacturing - Precision Engineering Since 1978'
  const description = 'Industry-leading manufacturing solutions with precision engineering, quality assurance, and on-time delivery. ISO 9001 and AS9100 certified.'

  return {
    title,
    description,
    keywords: ['Precision Manufacturing', 'CNC Machining', 'Aerospace Components', 'Sheet Metal Fabrication', 'Investment Casting', 'ISO 9001'],
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export default async function Home() {
  // Check if the app is properly configured
  const configStatus = checkConfiguration()

  if (!configStatus.isConfigured) {
    return <SetupGuide missingVars={configStatus.missingVars} />
  }

  const requestHeaders = await headers()
  const apolloClient = getServerApolloClient(requestHeaders)
  const data = await getHomepageData(apolloClient)
  const homepageContent = data?.nodeHomepages?.nodes?.[0]

  // Check if connected but no content exists - show content import guide
  if (!homepageContent) {
    const drupalBaseUrl = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL
    return <ContentSetupGuide drupalBaseUrl={drupalBaseUrl} />
  }

  return <HomepageRenderer homepageContent={homepageContent} />
}
