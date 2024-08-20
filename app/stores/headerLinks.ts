import type { HorizontalNavigationLink } from '#ui/types'

interface HeaderLinksState {
  links: HorizontalNavigationLink[]
  socialLinks: HorizontalNavigationLink[]
}

export const useHeaderLinksStore = defineStore('headerLinksStore', {
  state: (): HeaderLinksState => {
    return {} as HeaderLinksState
  },
  actions: {
    setBlogLinkActive(active: boolean) {
      if (this.links[1])
        this.links[1].active = active
    }
  }
})
