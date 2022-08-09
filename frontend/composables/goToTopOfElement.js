import {useGetElementByQuerySelector} from '~/composables/getElementByQuerySelector'

export function useGoToTopOfElement() {
  return {
    goToTopOfElement: (element) => {
      const top = useGetElementByQuerySelector()
        .getElementByQuerySelector(element)?.offsetTop
      top !== undefined && window && window.scrollTo({
        top: top + 1,
        behavior: 'smooth',
      })
    },
  }
}
