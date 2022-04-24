// noinspection JSUnusedGlobalSymbols
export default ({
                  commit,
                  local_storage_key: localStorageKey,
                  state_property: stateProperty,
                  presenter,
                }) => {
  let value = window.localStorage.getItem(localStorageKey)
  if (!value) {
    return
  }
  if (presenter) {
    value = presenter(value)
  }
  commit('set', [stateProperty, value])
}
