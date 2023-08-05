import {
  ISbStory,
  ISbStories,
  ISbStoriesParams,
  ISbLinkURLObject
} from 'storyblok-js-client'

interface TStory<TStoryData>
  extends Omit<ISbStory['data'], 'links' | 'rels' | 'stories'> {
  data: {
    links: (TStoryData | ISbLinkURLObject)[]
    rels: TStoryData[]
    story: TStoryData
  }
}

interface TStories<TStoryData>
  extends Omit<ISbStories['data'], 'links' | 'rels' | 'stories'> {
  data: {
    links: (TStoryData | ISbLinkURLObject)[]
    rels: TStoryData[]
    stories: TStoryData[]
  }
}

export function useTypedStoryblokApi<S>() {
  const client = useStoryblokApi()
  const base = 'cdn/stories/'

  const getStory = (url: string, params?: ISbStoriesParams) => {
    return client.get(`${base}${url}`, params) as unknown as Promise<TStory<S>>
  }

  const getStories = (url: string, params?: ISbStoriesParams) => {
    return client.get(`${base}${url}`, params) as unknown as Promise<
      TStories<S>
    >
  }

  return {
    getStory,
    getStories
  }
}
