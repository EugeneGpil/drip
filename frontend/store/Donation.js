import {defineStore} from 'pinia'

const state = () => ({
  wallet: '0x13A9C362ed32297ff5f7D6C5cF97b0A8f242AbfD',
})

const actions = {}

const getters = {}

export const useDonationStore = defineStore('donationStore', {
  namespaced: true,
  state,
  actions,
  getters,
})
