<template>
  <div
    class="content__inner w-full z-0 relative overflow-hidden p-5 lg:p-10 max-w-[600px] flex flex-col items-center h-full"
  >
    <h2 class="text-white text-lg md:text-2xl text-center mb-5">
      {{ $t('m_promo_text_1') }}<br />
      <span class="font-bold">{{ formatPromoDate() }}</span>
    </h2>

    <form @submit.prevent="submitForm" class="flex w-full flex-col text-center">
      <div class="flex flex-col">
        <label for="phone-modal" class="flex text-white text-xs mb-[10px]">
          {{ $t('m_promo_text_2') }}
        </label>
        <div class="phone-intl">
          <ClientOnly>
            <IntlTelInput
              ref="phoneInput"
              :options="{
                initialCountry: 'id',
                countryOrder: ['id', 'ua', 'ru', 'by'],
                separateDialCode: true,
                showSelectedDialCode: true,
                countrySearch: false,
                strictMode: true,
              }"
              :input-props="{
                placeholder: '999-99-9999',
                maxlength: 15,
                onInput: handlePhoneInput,
              }"
              @changeNumber="phone = $event"
            />
            <template #fallback>
              <input
                type="tel"
                v-model="phone"
                placeholder="999-99-9999"
                maxlength="15"
                @input="handlePhoneInput"
                class="bg-white/10 px-5 py-4 lg:py-6 w-full text-sm text-white leading-[120%] lg:leading-[90%] rounded-[10px] outline-none"
              />
            </template>
          </ClientOnly>
        </div>

        <p
          class="text-red-700 text-left transition-all h-full"
          :class="{
            'max-h-10 opacity-100 mt-2': isError,
            'max-h-0 opacity-0': !isError,
          }"
        >
          {{ $t('fill_all_fields') }}
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
          {{ $t('send') }}
        </button>

        <p class="text-center text-white text-xs lg:text-sm w-full mt-5">
          {{ $t('m_promo_text_3') }}
          <NuxtLink
            href="/docs/privacy-police"
            class="text-blue-400 font-bold underline transition-all hover:text-blue-700"
          >
            {{ $t('policy') }}
          </NuxtLink>
        </p>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue';
import { usePagesStore } from '~/stores/functions/pages';
import { useToolkit } from '~/stores/functions/toolkit';
import { useLangStore } from '~/stores/functions/language';
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

const currentForm =
  formsStore.forms.length && formsStore.forms?.filter((item) => item.slug === 'offer-form')[0];

watch(pagesStore, (newValue) => {
  allPages.value = newValue?.pagesList;
});

const phone = ref('');
const phoneInput = ref(null);
const isError = ref(null);
const errorText = ref('');
const isSending = ref(false);
const isSuccess = ref(false);

const toolkitStore = useToolkit();

const handlePhoneInput = (e) => {
  e.target.value = e.target.value.replace(/[^\d]/g, '');
  phone.value = e.target.value;
};

const resetForm = () => {
  phone.value = '';
  if (phoneInput.value?.instance) {
    phoneInput.value.instance.setNumber('');
  }
};

const placeholderLang = {
  ru: 'Введите ваш номер телефона',
  en: 'Enter your phone number',
  ua: 'Введіть ваш номер телефону',
};

const formatPromoDate = () => {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth();

  const monthNames = {
    ru: [
      'января',
      'февраля',
      'марта',
      'апреля',
      'мая',
      'июня',
      'июля',
      'августа',
      'сентября',
      'октября',
      'ноября',
      'декабря',
    ],
    en: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    ua: [
      'січня',
      'лютого',
      'березня',
      'квітня',
      'травня',
      'червня',
      'липня',
      'серпня',
      'вересня',
      'жовтня',
      'листопада',
      'грудня',
    ],
  };

  const monthName = monthNames[langStore.lang] || monthNames.ru;
  const until = langStore.lang === 'ru' ? 'до' : langStore.lang === 'en' ? 'until' : 'до';
  return `${until} ${day} ${monthName[month]}`;
};

const submitForm = async () => {
  if (currentForm?.captcha) {
    if (!recaptcha()) {
      errorText.value = 'Recaptcha error';
      return (isError.value = true);
    }
  }

  try {
    if (phoneInput.value?.instance) {
      phone.value = phoneInput.value.instance.getNumber();
    }

    if (!phone.value || phone.value.length < 10) {
      isError.value = true;
      return;
    } else {
      isError.value = false;
    }

    isSending.value = true;

    await useFetch('/api/send-form', {
      method: 'POST',
      body: {
        phone: phone.value,
        form: 'message',
        source_url: window.location.href,
      },
    }).then((res) => {
      isSending.value = false;
      isSuccess.value = true;
      resetForm();

      setTimeout(() => {
        modalsStore.removeModal('promo');
      }, 1500);
    });
  } catch (error) {
    console.error('Contact form could not be sent', error);
    isSending.value = false;
  }
};
</script>
