export default (value) => {
  if (!value?.replace) {
    return value
  }

  let onlyNumbersAndDots = value.replace(/[^\d.]/g, '')

  if (onlyNumbersAndDots[0] === '.' || onlyNumbersAndDots === '') {
    onlyNumbersAndDots = `0${onlyNumbersAndDots}`
  }

  const split = onlyNumbersAndDots.split('.')
  const beforeDot = split.shift()
  const afterDot = split.join('')
  const parsed = `${beforeDot}.${afterDot}`
  return parseFloat(parsed)
}
