<template>
  <NuxtLayout>
    <transition name="fade">
      <NuxtPage />
    </transition>
  </NuxtLayout>
</template>

<script setup>
import { ref } from 'vue';
import { useCookie } from '#app';
import { useHead } from '@unhead/vue';

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  script: [
    {
      innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-NW6LBFJS');`,
      type: 'text/javascript',
    },
  ],
  noscript: [
    {
      innerHTML: `
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NW6LBFJS"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>
      `,
    },
  ],
  __dangerouslyDisableSanitizersByTagID: {
    'gtm-script': ['innerHTML'],
    noscript: ['innerHTML'],
  },
});

const nuxtApp = useNuxtApp();
const modalsStore = useModalsStore();

let promoTimeout = null;
const promoModalDismissals = useCookie('promoModalDismissals', {
  default: () => 0,
  maxAge: 60 * 60 * 24 * 30,
});

const startPromoTimer = (delay = 15000) => {
  if (promoTimeout) {
    clearTimeout(promoTimeout);
  }

  if (promoModalDismissals.value >= 2) {
    return;
  }

  promoTimeout = setTimeout(() => {
    modalsStore.addModal('promo');
    if (import.meta.client) {
      localStorage.setItem('promoModalTimerTriggered', 'true');
    }
  }, delay);
};

nuxtApp.hook('page:finish', () => {
  startPromoTimer(15000);
});

if (import.meta.client) {
  window.addEventListener('storage', (e) => {
    if (e.key === 'promoModalDismissals') {
      const dismissals = parseInt(e.newValue) || 0;
      promoModalDismissals.value = dismissals;

      if (dismissals === 1) {
        startPromoTimer(40000);
      } else if (dismissals >= 2) {
        if (promoTimeout) {
          clearTimeout(promoTimeout);
          promoTimeout = null;
        }
      }
    }
  });

  const localStorageDismissals = parseInt(localStorage.getItem('promoModalDismissals')) || 0;
  promoModalDismissals.value = localStorageDismissals;
}

import { watchEffect, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useLangStore } from '@/stores/functions/language';

const route = useRoute();
const langStore = useLangStore();
const langCookie = useCookie('lang'); // Создаём cookie для хранения языка

onMounted(() => {
  // 1. Проверяем куки
  if (langCookie.value) {
    langStore.lang = langCookie.value;
  } else {
    // 2. Определяем язык системы
    const systemLang = navigator.language?.split('-')[0] || 'ru';

    // 3. Если язык системы поддерживается, устанавливаем его
    const supportedLangs = ['ru', 'ua', 'en']; // Список поддерживаемых языков
    langStore.lang = supportedLangs.includes(systemLang) ? systemLang : 'ru';

    // 4. Сохраняем в куки
    langCookie.value = langStore.lang;
  }
});

// 5. Следим за изменением языка в URL и обновляем `langStore.lang`
watchEffect(() => {
  if (route.params.lang) {
    langStore.lang = route.params.lang;
    langCookie.value = route.params.lang; // Обновляем куки при изменении языка в URL
  }
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
