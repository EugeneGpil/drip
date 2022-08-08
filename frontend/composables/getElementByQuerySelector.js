export function useGetElementByQuerySelector() {
  return {
    getElementByQuerySelector(selector) {
      if (typeof selector === 'string' || selector instanceof String) {
        return document?.querySelector(selector)
      }
      return selector
    },
  }
}
