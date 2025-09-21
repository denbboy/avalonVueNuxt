<template>
  <div
    class="content__inner z-0 relative overflow-hidden p-5 lg:p-10 max-w-[600px] flex flex-col items-center justify-center h-full"
  >
    <h2 class="text-white text-lg md:text-2xl font-bold text-center mb-5">
      {{ $t('m_project_text_1') }}
    </h2>

    <form @submit.prevent="submitForm" class="flex w-full flex-col text-center">
      <div class="flex flex-col">
        <div class="phone-vti">
          <VueTelInput
            :input-options="inputOptions"
            v-model="phone"
            :preferred-countries="preferredCountries"
            :only-countries="sortedCountries"
            @input="inputPhoneNumber"
          />
        </div>

        <p
          class="text-red-700 text-left transition-all h-full"
          :class="{
            'max-h-10 opacity-100 mt-2': isError,
            'max-h-0 opacity-0': !isError,
          }"
        >
          {{ errorText.length ? errorText : $t('fill_all_fields') }}
        </p>
        <p
          class="text-white/50 text-left transition-all h-full"
          :class="{
            'max-h-10 opacity-100 mt-2': isSending,
            'max-h-0 opacity-0': !isSending,
          }"
        >
          {{ $t('wait_for_send') }}
        </p>
        <p
          class="text-green-500 text-left transition-all h-full"
          :class="{
            'max-h-10 opacity-100 mt-2': isSuccess,
            'max-h-0 opacity-0': !isSuccess,
          }"
        >
          {{ $t('message_sent_successfuly') }}
        </p>

        <button
          type="submit"
          class="white-button w-full mt-5 lg:leading-[120%] lg:py-5 leading-[90%]"
        >
          {{ $t('get_a_presentation') }}
        </button>

        <p class="text-center text-white text-xs lg:text-sm w-full mt-5">
          {{ $t('m_calendar_text_4_1') }}
          <a
            target="_blank"
            :href="toolkitStore?.settings?.soc_link_whats"
            class="text-blue-400 font-bold underline transition-all hover:text-blue-700"
          >
            {{ $t('m_calendar_text_4_2') }}
          </a>
          {{ $t('m_calendar_text_4_3') }}
        </p>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { usePagesStore } from '~/stores/functions/pages';
import { useToolkit } from '~/stores/functions/toolkit';
import { useLangStore } from '~/stores/functions/language';
import { VueTelInput } from 'vue-tel-input';
import 'vue-tel-input/vue-tel-input.css';
import iso31661 from 'iso-3166-1';
import { useReCaptcha } from 'vue-recaptcha-v3';
import { useFormsStore } from '~/stores/functions/forms';
import { useModalsStore } from '~/stores/functions/modals';

const recaptchaInstance = useReCaptcha();

const recaptcha = async () => {
  await recaptchaInstance?.recaptchaLoaded();
  const token = await recaptchaInstance?.executeRecaptcha('yourActionHere');
  return token;
};

const pagesStore = usePagesStore();
const langStore = useLangStore();
const formsStore = useFormsStore();
const modalsStore = useModalsStore();
const allPages = ref([]);

const currentForm = formsStore?.forms?.filter((item) => item.slug === 'showcase-form')[0];

watch(pagesStore, (newValue) => {
  allPages.value = newValue?.pagesList;
});

const name = ref(null);
const phone = ref(null);
const isError = ref(null);
const errorText = ref('');
const isSending = ref(false);
const isSuccess = ref(false);

const inputPhoneNumber = () => {
  phone.value = phone.value.replace(/(?!^\+)[^\d]/g, '');
};

const toolkitStore = useToolkit();

const resetForm = () => {
  name.value = '';
  phone.value = '';
};

const submitForm = async () => {
  if (currentForm?.captcha) {
    if (!recaptcha()) {
      errorText.value = 'Recaptcha error';
      return (isError.value = true);
    }
  }

  try {
    if (!phone.value || phone.value.length < 10) {
      isError.value = true;
      return;
    } else {
      isError.value = false;
    }

    isSending.value = true;

    try {
      await useFetch('/api/send-form', {
        method: 'POST',
        body: {
          method: name.value,
          phone: phone.value,
          form: 'presentation',
          source_url: window.location.href,
        },
      }).then((res) => {
        isSending.value = false;
        isSuccess.value = true;
        resetForm();

        setTimeout(() => {
          modalsStore.removeModal('presentation');
        }, 1500);
      });
    } catch (err) {
      isSending.value = false;
    }
  } catch (error) {
    console.error('Contact form could not be sent', error);
  }
};

const preferredCountries = [
  'id', // Индонезия
  'ua', // Украина
  'ru', // Россия
  'by', // Беларусь
  'kz', // Казахстан
  'us', // США
  'gb', // Англия
  'fr', // Франция
  'cn', // КНР
];

// Получаем список всех стран
const allCountries = iso31661.all().map((country) => country.alpha2);

// Создаем computed property, который включает все страны
const sortedCountries = computed(() => {
  const preferredSet = new Set(preferredCountries);
  const unselectedCountries = allCountries.filter((country) => !preferredSet.has(country));
  return [...preferredCountries, ...unselectedCountries];
});

import { createDirectus, rest, readFlow } from '@directus/sdk';

const client = createDirectus('https://api.avalonbali.com').with(rest());

const placeholderLang = {
  ru: '999-99-9999',
  en: '999-99-9999',
  ua: '999-99-9999',
};

const inputOptions = {
  showDialCode: true,
  autoFormat: false,
  placeholder: placeholderLang[langStore.lang],
  maxlength: 15,
};
</script>
