<template>
  <div
    class="content__inner w-full z-0 relative overflow-hidden p-5 lg:p-10 max-w-[600px] flex flex-col items-center h-full"
  >
    <div class="absolute right-[-34px] -top-5 lg:top-5 z-0">
      <img src="/img/icons/vector-logo.svg" class="w-[68px]" alt="vector-logo" />
    </div>
    <div class="absolute left-[-34px] bottom-0 lg:bottom-[154px] z-0">
      <img src="/img/icons/vector-logo.svg" class="w-[68px]" alt="vector-logo" />
    </div>

    <h2 class="text-white text-lg md:text-2xl font-bold text-center mb-5">
      {{ $t('m_message_text_1') }}
    </h2>

    <form @submit.prevent="submitForm" class="flex w-full flex-col text-center">
      <div class="flex flex-col">
        <div class="phone-intl">
          <ClientOnly>
            <IntlTelInput
              ref="phoneInput"
              :options="{
                initialCountry: 'id',
                preferredCountries: ['id', 'ua', 'ru', 'by'],
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
          {{ $t('m_message_text_3') }}
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
import { ref, watch } from 'vue';
import { usePagesStore } from '~/stores/functions/pages';
import { useToolkit } from '~/stores/functions/toolkit';
import { useReCaptcha } from 'vue-recaptcha-v3';
import { useFormsStore } from '~/stores/functions/forms';
import { useModalsStore } from '~/stores/functions/modals';

const recaptchaInstance = useReCaptcha();
const modalsStore = useModalsStore();

const recaptcha = async () => {
  await recaptchaInstance?.recaptchaLoaded();
  const token = await recaptchaInstance?.executeRecaptcha('yourActionHere');
  return token;
};

const pagesStore = usePagesStore();
const langStore = useLangStore();
const formsStore = useFormsStore();
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
  if (phoneInput.value?.intlTelInput?.instance) {
    phoneInput.value.intlTelInput.instance.setNumber('');
  }
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

    await useFetch('/api/send-form', {
      method: 'POST',
      body: {
        phone: phone.value,
        form: 'Получить консультацию',
        source_url: window.location.href,
      },
    }).then((res) => {
      isSending.value = false;
      isSuccess.value = true;
      resetForm();

      setTimeout(() => {
        modalsStore.removeModal('message');
      }, 1500);
    });
  } catch (error) {
    console.error('Contact form could not be sent', error);
    isSending.value = false;
  }
};
</script>
