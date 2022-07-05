// noinspection NpmUsedModulesInstalled,JSUnusedGlobalSymbols

import getDefaultMutations from '@/assets/functions/getDefaultMutations'
import loginActions from '@/assets/store/Login/actions'
import loginGetters from '@/assets/store/Login/getters'

export const state = () => ({
  isMetamaskInstalled: false,
})

export const mutations = getDefaultMutations()

export const actions = loginActions

export const getters = loginGetters
