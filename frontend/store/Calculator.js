import {defineStore} from 'pinia'

const state = () => ({
  hydrationGasFee: 0.0025
})

const actions = {
  setHydrationGasFee(hydrationGasFee) {
    this.hydrationGasFee = hydrationGasFee
  },
}

const getters = {}

export const useCalculatorStore = defineStore('calculatorStore', {
  state,
  actions,
  getters,
})
