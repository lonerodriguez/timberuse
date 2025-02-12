import { graphql } from '~~/lib/common/generated/gql'

export const developerSettingsAccessTokensQuery = graphql(`
  query DeveloperSettingsAccessTokens {
    activeUser {
      id
      apiTokens {
        id
        name
        lastUsed
        lastChars
        createdAt
        scopes
      }
    }
  }
`)

export const developerSettingsApplicationsQuery = graphql(`
  query DeveloperSettingsApplications {
    activeUser {
      createdApps {
        id
        secret
        name
        description
        redirectUrl
        scopes {
          name
          description
        }
      }
      id
    }
  }
`)
