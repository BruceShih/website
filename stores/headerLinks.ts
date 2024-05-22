import type { HorizontalNavigationLink } from '#ui/types'

interface HeaderLinksState {
  links: HorizontalNavigationLink[]
  socialLinks: HorizontalNavigationLink[]
}

export const useHeaderLinksStore = defineStore('headerLinksStore', {
  state: (): HeaderLinksState => ({
    links: [
      {
        label: 'About',
        to: '/'
      },
      {
        label: 'Blog',
        to: '/blog'
      },
      {
        label: 'Projects',
        to: '/projects'
      },
      {
        label: 'Contact',
        to: '/contact'
      }
    ],
    socialLinks: [
      {
        label: 'Twitter',
        icon: 'i-lucide-twitter',
        to: 'https://twitter.com/bruceshihtw'
      },
      {
        label: 'GitHub',
        icon: 'i-lucide-github',
        to: 'https://github.com/BruceShih'
      }
    ]
  }),
  actions: {
    setBlogLinkActive(active: boolean) {
      this.links[1].active = active
    }
  }
})
