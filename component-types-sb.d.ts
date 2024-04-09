export interface RichtextStoryblok {
  type: string
  content?: RichtextStoryblok[]
  marks?: RichtextStoryblok[]
  attrs?: any
  text?: string
  [k: string]: any
}

export interface ArticleStoryblok {
  title: string
  description?: string
  date: string
  content: RichtextStoryblok
  _uid: string
  component: 'article'
  [k: string]: any
}

export interface HeroStoryblok {
  title: string
  body: RichtextStoryblok
  _uid: string
  component: 'hero'
  [k: string]: any
}

export interface PageStoryblok {
  title?: string
  body: RichtextStoryblok
  _uid: string
  component: 'page'
  uuid?: string
  [k: string]: any
}
