// noinspection NpmUsedModulesInstalled
import v1 from '@/assets/routes/v1'

// noinspection JSUnusedGlobalSymbols
export default async ({
                        commit,
                        axios,
                        currency_from_name: currencyFromName,
                        currency_to_name: currencyToName,
                        state_property: stateProperty,
                      }) => {
  const response = await axios.get(v1.currency_rate, {
    params: {
      currency_from_name: currencyFromName,
      currency_to_name: currencyToName,
    }
  })
  const rate = response.data.rate
  await commit('set', [stateProperty, rate])
}
