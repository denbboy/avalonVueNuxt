import { createGtm } from '@gtm-support/vue-gtm'

export default defineNuxtPlugin((nuxtApp) => {

  // const tookit = useToolkit();

  // const gtmId = tookit.settings?.google_analytics;

  // watch(
  //   () => tookit.settings?.google_analytics,
  //   (newGtmId) => {
  //     if (newGtmId) {
  //       nuxtApp.vueApp.use(createGtm({
  //         id: newGtmId,
  //         defer: false,
  //         compatibility: false,
  //         enabled: true,
  //         debug: true,
  //         loadScript: true,
  //         vueRouter: useRouter(),
  //         trackOnNextTick: false,
  //       }))
        
  //       useRuntimeConfig().public.gtm.id = newGtmId;
  //     }
  //   },
  //   { immediate: true }
  // );

})