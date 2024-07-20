// plugins/gtm.js
import { watch } from 'vue';

export default defineNuxtPlugin((nuxtApp) => {
  const toolkitStore = useToolkit();
  const { $gtm } = nuxtApp;

  if (!$gtm) {
    console.error('GTM plugin is not available');
    return;
  }

  console.log('$gtm:', $gtm);

  watch(
    () => toolkitStore.settings,
    (newSettings) => {
      console.log('Settings changed:', newSettings);

      if (newSettings && newSettings.google_analytics) {
        console.log('Initializing GTM with ID:', newSettings.google_analytics);
        $gtm.init(newSettings.google_analytics);
      }
    },
    { immediate: true }
  );
});
