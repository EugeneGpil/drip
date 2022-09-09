export default (value) => {
  let value2 = value
  if (value2?.toString) {
    value2 = value2.toString()
  }

  if (!value2?.replace) {
    return value2
  }

  let onlyNumbersAndDots = value2.replace(/[^\d.]/g, '')

  if (onlyNumbersAndDots[0] === '.' || onlyNumbersAndDots === '') {
    onlyNumbersAndDots = `0${onlyNumbersAndDots}`
  }

  const split = onlyNumbersAndDots.split('.')
  const beforeDot = split.shift()
  const afterDot = split.join('')
  return `${beforeDot}.${afterDot}`
}
