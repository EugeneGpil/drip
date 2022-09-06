export default (localStorageKey, value, afterSetClosure) => {
  window?.localStorage.setItem(localStorageKey, value)
  afterSetClosure(value)
}
