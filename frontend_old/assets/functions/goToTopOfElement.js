// noinspection JSUnusedGlobalSymbols

export default (element) => {
  const top = element.offsetTop
  window.scrollTo({
    top,
    behavior: 'smooth',
  })
}
