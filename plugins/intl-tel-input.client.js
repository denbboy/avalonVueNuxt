import IntlTelInput from 'intl-tel-input/vueWithUtils'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('IntlTelInput', IntlTelInput)
})
