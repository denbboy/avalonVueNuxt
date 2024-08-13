import { VueReCaptcha } from 'vue-recaptcha-v3';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueReCaptcha, {
        siteKey: '6LcQOhEqAAAAAJpHa2ZXE-4OXi0syQk7BukpaHlW',
        loaderOptions: {
            autoHideBadge: false,
            explicitRenderParameters: {
                // badge: 'bottomleft',
            },
        },
    });
});


// 6LcQOhEqAAAAAJpHa2ZXE-4OXi0syQk7BukpaHlW
