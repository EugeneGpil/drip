// noinspection JSUnusedGlobalSymbols
/**
 *
 * @param {String} localStorageKey
 * @param {function} saverClosure
 */
export default (localStorageKey, saverClosure) => {
  let value = window.localStorage.getItem(localStorageKey)
  if (value === undefined) {
    return
  }
  saverClosure(value)
}
