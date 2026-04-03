// Shared types
export interface DrupalImage {
  url: string
  alt?: string
  width?: number
  height?: number
  variations?: ImageVariation[]
}

export interface ImageVariation {
  name: string
  url: string
  width: number
  height: number
}

export interface DrupalTerm {
  id: string
  name: string
  path?: string
}

// Base node type
export interface DrupalNode {
  __typename?: string
  id: string
  title: string
  path: string
  created?: {
    timestamp: number
  }
  changed?: {
    timestamp: number
  }
}

// Paragraph types
export interface DrupalStatItem {
  id: string
  number: string
  label: string
}

// Homepage
export interface DrupalHomepage extends DrupalNode {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: {
    processed: string
  }
  heroImage?: DrupalImage
  statsItems?: DrupalStatItem[]
  featuredItemsTitle?: string
  ctaTitle?: string
  ctaDescription?: {
    processed: string
  }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

// Product Line
export interface DrupalProductLine extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  productImage?: DrupalImage
  applications?: string[]
  materials?: string[]
  leadTime?: string
  minOrder?: string
  industry?: DrupalTerm[]
}

export interface ProductLinesData {
  nodeProductLines: {
    nodes: DrupalProductLine[]
  }
}

// Facility
export interface DrupalFacility extends DrupalNode {
  body?: {
    processed: string
  }
  facilityImage?: DrupalImage
  location?: string
  squareFootage?: string
  employees?: string
  capabilities?: string[]
  yearEstablished?: string
}

export interface FacilitiesData {
  nodeFacilities: {
    nodes: DrupalFacility[]
  }
}

// Certification
export interface DrupalCertification extends DrupalNode {
  body?: {
    processed: string
  }
  certImage?: DrupalImage
  issuingBody?: string
  certNumber?: string
  validThrough?: string
  scope?: string
}

export interface CertificationsData {
  nodeCertifications: {
    nodes: DrupalCertification[]
  }
}

// News
export interface DrupalNews extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  newsImage?: DrupalImage
  authorName?: string
  tags?: DrupalTerm[]
}

export interface NewsData {
  nodeNewsItems: {
    nodes: DrupalNews[]
  }
}

// Basic Page
export interface DrupalPage extends DrupalNode {
  body?: {
    processed: string
  }
}

// Feature color type
export type FeatureColor = 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo'
