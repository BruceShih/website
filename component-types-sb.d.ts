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

export interface AssetStoryblok {
  _uid?: string
  id: number
  alt?: string
  name: string
  focus?: string
  source?: string
  title?: string
  filename: string
  copyright?: string
  fieldtype?: string
  meta_data?: null | {
    [k: string]: any
  }
  is_external_url?: boolean
  [k: string]: any
}

export type MultilinkStoryblok =
  | {
    id?: string
    cached_url?: string
    anchor?: string
    linktype?: 'story'
    target?: '_self' | '_blank'
    [k: string]: any
  }
  | {
    url?: string
    cached_url?: string
    anchor?: string
    linktype?: 'asset' | 'url'
    target?: '_self' | '_blank'
    [k: string]: any
  }
  | {
    email?: string
    linktype?: 'email'
    target?: '_self' | '_blank'
    [k: string]: any
  }

export interface ProjectStoryblok {
  title?: string
  preview?: AssetStoryblok
  description?: string
  link?: Exclude<MultilinkStoryblok, { linktype?: 'email' } | { linktype?: 'asset' }>
  repository?: Exclude<MultilinkStoryblok, { linktype?: 'email' } | { linktype?: 'asset' }>
  _uid: string
  component: 'project'
  [k: string]: any
}
