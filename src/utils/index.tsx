export const formatNumberForDisplay = (
  number: number,
  numberType: 'quantity' | 'hash' = 'quantity',
  maxDecimals: 1 | 2 = 1
) => {
  const suffixes = {
    quantity: ['', 'K', 'M', 'B', 'T'],
    hash: ['', 'K', 'M', 'G', 'T', 'P']
  }[numberType]

  let formatedNumber = number
  let suffixIndex = 0
  while (formatedNumber >= 1000 && suffixIndex < suffixes.length - 1) {
    formatedNumber /= 1000
    suffixIndex++
  }

  const denominator = maxDecimals === 1 ? 10 : 100
  const preciseNumber = (Math.round((formatedNumber + Number.EPSILON) * denominator) / denominator).toString()
  const numberParts = preciseNumber.split('.')
  const numberInteger = numberParts[0]
  const numberDecimal = (numberParts.length > 1 && `.${numberParts[1]}`) || undefined

  return [numberInteger, numberDecimal, suffixes[suffixIndex]]
}
