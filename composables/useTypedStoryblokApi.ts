import type {
  ISbLinkURLObject,
  ISbStories,
  ISbStoriesParams,
  ISbStory,
  ISbStoryData
} from 'storyblok-js-client'

export interface TStory<TStoryData>
  extends Omit<ISbStory['data'], 'links' | 'rels' | 'story'> {
  data: {
    links: (ISbStoryData | ISbLinkURLObject)[]
    rels: ISbStoryData<TStoryData>[]
    story: ISbStoryData<TStoryData>
  }
}

export interface TStories<TStoryData>
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

  const getStory = async (url: string) => {
    const path = url[0] === '/' ? url.substring(1) : url
    const { data } = await client.get(`${base}${path}`) as unknown as TStory<S>
    return data
  }

  const getStories = async (params: ISbStoriesParams) => {
    const { data } = await client.getStories(params) as unknown as TStories<S>
    return data
  }

  return {
    getStory,
    getStories
  }
}
