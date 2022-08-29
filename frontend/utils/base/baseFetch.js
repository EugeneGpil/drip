import {$fetch} from 'ohmyfetch'

export default $fetch.create({
  baseURL: process.server ? 'http:nginx/api' : '/api',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Host': 'localhost',
  },
})
