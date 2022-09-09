import {defineNuxtPlugin} from 'nuxt/app'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faArrowUpLong, faWallet, faYinYang, faCircleCheck} from '@fortawesome/free-solid-svg-icons'

library.add(faArrowUpLong, faWallet, faYinYang, faCircleCheck)

export default defineNuxtPlugin(nuxtApp =>
    nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
)
