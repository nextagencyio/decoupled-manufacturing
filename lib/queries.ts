import { gql } from '@apollo/client'

// Homepage query with stats
export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        __typename
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription {
          processed
        }
        heroImage {
          url
          alt
          width
          height
          variations(styles: [LARGE, MEDIUM]) {
            name
            url
            width
            height
          }
        }
        statsItems {
          ... on ParagraphStatItem {
            id
            number
            label
          }
        }
        featuredItemsTitle
        ctaTitle
        ctaDescription {
          processed
        }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

// Product Lines
export const GET_PRODUCT_LINES = gql`
  query GetProductLines($first: Int = 20) {
    nodeProductLines(first: $first, sortKey: TITLE) {
      nodes {
        __typename
        id
        title
        path
        ... on NodeProductLine {
          body {
            processed
            summary
          }
          productImage {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
          applications
          materials
          leadTime
          minOrder
          industry {
            ... on TermInterface {
              id
              name
            }
          }
        }
      }
    }
  }
`

export const GET_PRODUCT_LINE_BY_PATH = gql`
  query GetProductLineByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeProductLine {
            __typename
            id
            title
            path
            body {
              processed
            }
            productImage {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
            applications
            materials
            leadTime
            minOrder
            industry {
              ... on TermInterface {
                id
                name
              }
            }
          }
        }
      }
    }
  }
`

// Facilities
export const GET_FACILITIES = gql`
  query GetFacilities($first: Int = 20) {
    nodeFacilities(first: $first, sortKey: TITLE) {
      nodes {
        __typename
        id
        title
        path
        ... on NodeFacility {
          body {
            processed
          }
          facilityImage {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
          location
          squareFootage
          employees
          capabilities
          yearEstablished
        }
      }
    }
  }
`

export const GET_FACILITY_BY_PATH = gql`
  query GetFacilityByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeFacility {
            __typename
            id
            title
            path
            body {
              processed
            }
            facilityImage {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
            location
            squareFootage
            employees
            capabilities
            yearEstablished
          }
        }
      }
    }
  }
`

// Certifications
export const GET_CERTIFICATIONS = gql`
  query GetCertifications($first: Int = 20) {
    nodeCertifications(first: $first, sortKey: TITLE) {
      nodes {
        __typename
        id
        title
        path
        ... on NodeCertification {
          body {
            processed
          }
          certImage {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
          issuingBody
          certNumber
          validThrough
          scope
        }
      }
    }
  }
`

export const GET_CERTIFICATION_BY_PATH = gql`
  query GetCertificationByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeCertification {
            __typename
            id
            title
            path
            body {
              processed
            }
            certImage {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
            issuingBody
            certNumber
            validThrough
            scope
          }
        }
      }
    }
  }
`

// News
export const GET_NEWS = gql`
  query GetNews($first: Int = 20) {
    nodeNewses(first: $first, sortKey: CREATED_AT) {
      nodes {
        __typename
        id
        title
        path
        ... on NodeNews {
          body {
            processed
            summary
          }
          newsImage {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
          authorName
          tags {
            ... on TermInterface {
              id
              name
            }
          }
        }
      }
    }
  }
`

export const GET_NEWS_BY_PATH = gql`
  query GetNewsByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeNews {
            __typename
            id
            title
            path
            body {
              processed
            }
            newsImage {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
            authorName
            tags {
              ... on TermInterface {
                id
                name
              }
            }
          }
        }
      }
    }
  }
`

// Generic route query for pages and other content
export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage {
            __typename
            id
            title
            path
            body {
              processed
            }
          }
          ... on NodeProductLine {
            __typename
            id
            title
            path
            body {
              processed
            }
            productImage {
              url
              alt
              width
              height
            }
            applications
            materials
            leadTime
            minOrder
            industry {
              ... on TermInterface {
                id
                name
              }
            }
          }
          ... on NodeFacility {
            __typename
            id
            title
            path
            body {
              processed
            }
            facilityImage {
              url
              alt
              width
              height
            }
            location
            squareFootage
            employees
            capabilities
            yearEstablished
          }
          ... on NodeCertification {
            __typename
            id
            title
            path
            body {
              processed
            }
            certImage {
              url
              alt
              width
              height
            }
            issuingBody
            certNumber
            validThrough
            scope
          }
          ... on NodeNews {
            __typename
            id
            title
            path
            body {
              processed
            }
            newsImage {
              url
              alt
              width
              height
            }
            authorName
            tags {
              ... on TermInterface {
                id
                name
              }
            }
          }
          ... on NodeHomepage {
            __typename
            id
            title
            path
            heroTitle
            heroSubtitle
            heroDescription {
              processed
            }
            heroImage {
              url
              alt
              width
              height
            }
            statsItems {
              ... on ParagraphStatItem {
                id
                number
                label
              }
            }
            featuredItemsTitle
            ctaTitle
            ctaDescription {
              processed
            }
            ctaPrimary
            ctaSecondary
          }
        }
      }
    }
  }
`

// Featured product lines for homepage (limit to 3)
export const GET_FEATURED_ITEMS = gql`
  query GetFeaturedItems {
    nodeProductLines(first: 3, sortKey: TITLE) {
      nodes {
        __typename
        id
        title
        path
        ... on NodeProductLine {
          applications
          industry {
            ... on TermInterface {
              id
              name
            }
          }
          productImage {
            url
            alt
            variations(styles: [MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`
