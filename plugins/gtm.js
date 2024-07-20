// // plugins/gtm-dynamic.js
// import { defineNuxtPlugin } from '#app';

// export default defineNuxtPlugin(({ $gtm, vueApp }) => {
//   const tookit = useToolkit();

//   const gtmId = tookit.settings.google_analytics;

//   console.log('q11', vueApp);

//   const initializeGTM = (gtmId) => {
//     if ($gtm && gtmId && /^GTM-[0-9A-Z]+$/.test(gtmId)) {
//       $gtm.init(gtmId);
//     } else {
//       console.error('Invalid GTM ID:', gtmId);
//     }
//   };

//   watch(
//     () => tookit.settings.google_analytics,
//     (newGtmId) => {
//       if (newGtmId) {
//         initializeGTM(newGtmId);
//       }
//     },
//     { immediate: true }
//   );
// });





import { createGtm } from '@gtm-support/vue-gtm'

export default defineNuxtPlugin((nuxtApp) => {
  // if (useRuntimeConfig().public.appEnv !== 'production') return

  const tookit = useToolkit();

  const gtmId = tookit.settings.google_analytics;

  watch(
    () => tookit.settings.google_analytics,
    (newGtmId) => {
      if (newGtmId) {
        nuxtApp.vueApp.use(createGtm({
          id: newGtmId,
          defer: false,
          compatibility: false,
          enabled: true,
          debug: true,
          loadScript: true,
          vueRouter: useRouter(),
          trackOnNextTick: false,
        }))
        
        useRuntimeConfig().public.gtm.id = newGtmId;
        // setTimeout(() => {
        //   console.log(useRuntimeConfig().public);
        // }, 500)
      }
    },
    { immediate: true }
  );

})