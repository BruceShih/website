import type {
  ISbLinkURLObject,
  ISbStories,
  ISbStoriesParams,
  ISbStory,
  ISbStoryData
} from 'storyblok-js-client'

export type TStory<TStoryData> = ISbStory & {
  data: {
    links: (ISbStoryData | ISbLinkURLObject)[]
    rels: ISbStoryData<TStoryData>[]
    story: ISbStoryData<TStoryData>
  }
}

export type TStories<TStoryData> = ISbStories & {
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
    return await client.get(`${base}${path}`) as unknown as TStory<S>
  }

  const getStories = async (params: ISbStoriesParams) => {
    return await client.getStories(params) as unknown as TStories<S>
  }

  return {
    getStory,
    getStories
  }
}
