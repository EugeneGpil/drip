import v1 from '~/utils/routes/v1'
import baseFetch from '~/utils/base/baseFetch'

export default async (currencyFrom, currencyTo, setCallback) => {
  const res = await baseFetch(v1.currency_rate, {
    params: {
      currency_from_name: currencyFrom,
      currency_to_name: currencyTo,
    },
  })

  console.log('res', res)
  setCallback(res.rate)
}
