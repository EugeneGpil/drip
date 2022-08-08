import {useGetElementByQuerySelector} from '~/composables/getElementByQuerySelector'

export function useGoToTopOfElement() {
  return {
    goToTopOfElement: (element) => {
      const top = useGetElementByQuerySelector()
        .getElementByQuerySelector(element)?.offsetTop
      top && window && window.scrollTo({
        top,
        behavior: 'smooth',
      })
    },
  }
}
