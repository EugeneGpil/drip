import v1 from '../routes/v1'

// noinspection JSUnusedGlobalSymbols
export default async function (currencyFromName, currencyToName, setFunction) {
  // noinspection JSUnresolvedVariable
  const response = await this.$axios.get(v1.currency_rate, {
    params: {
      currency_from_name: currencyFromName,
      currency_to_name: currencyToName,
    }
  })
  const rate = response.data.rate
  setFunction(rate)
}
