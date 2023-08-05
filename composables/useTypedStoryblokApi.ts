import {
  ISbStoryData,
  ISbStory,
  ISbStories,
  ISbLinkURLObject,
  ISbStoriesParams
} from 'storyblok-js-client'

interface TStory<TStoryData>
  extends Omit<ISbStory['data'], 'links' | 'rels' | 'story'> {
  data: {
    links: (ISbStoryData | ISbLinkURLObject)[]
    rels: ISbStoryData<TStoryData>[]
    story: ISbStoryData<TStoryData>
  }
}

interface TStories<TStoryData>
  extends Omit<ISbStories['data'], 'links' | 'rels' | 'stories'> {
  data: {
    links: (ISbStoryData | ISbLinkURLObject)[]
    rels: ISbStoryData<TStoryData>[]
    stories: ISbStoryData<TStoryData>[]
  }
}

export function useTypedStoryblokApi<S>() {
  const client = useStoryblokApi()
  const base = 'cdn/stories/'

  const getStory = (url: string, params?: ISbStoriesParams) => {
    return client.get(`${base}${url}`, params) as unknown as Promise<TStory<S>>
  }

  const getStories = (params: ISbStoriesParams) => {
    return client.getStories(params) as unknown as Promise<TStories<S>>
  }

  return {
    getStory,
    getStories
  }
}
