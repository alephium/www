import { graphql, useStaticQuery } from 'gatsby'

export interface CommunityChannel {
  name: string | null
  emoji: string | null
  official: boolean | null
  telegram: string | null
  twitter: string | null
  blog: string | null
}

const useCommunityChannels = (): CommunityChannel[] => {
  const data = useStaticQuery<Queries.CommunityChannelsQuery>(graphql`
    query CommunityChannels {
      communityChannelsYaml {
        channels {
          name
          emoji
          official
          telegram
          twitter
          blog
        }
      }
    }
  `)

  return (data.communityChannelsYaml?.channels ?? []).map((channel) => ({
    name: channel?.name ?? null,
    emoji: channel?.emoji ?? null,
    official: channel?.official ?? null,
    telegram: channel?.telegram ?? null,
    twitter: channel?.twitter ?? null,
    blog: channel?.blog ?? null
  }))
}

export default useCommunityChannels
