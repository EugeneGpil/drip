export default ({
                  commit,
                  value,
                  local_storage_key: localStorageKey,
                  state_property: stateProperty,
                }) => {
  window.localStorage.setItem(localStorageKey, value)
  commit('set', [stateProperty, value])
}
