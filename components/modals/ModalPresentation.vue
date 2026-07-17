<template>
  <div
    class="content__inner z-0 relative overflow-hidden p-5 lg:p-10 max-w-[600px] flex flex-col items-center justify-center h-full"
  >
    <div class="absolute right-[-34px] -top-5 lg:top-5 z-0">
      <img src="/img/icons/vector-logo.svg" class="w-[68px]" alt="vector-logo" />
    </div>
    <div class="absolute left-[-34px] bottom-0 lg:bottom-[154px] z-0">
      <img src="/img/icons/vector-logo.svg" class="w-[68px]" alt="vector-logo" />
    </div>

    <h2 class="text-white text-lg md:text-2xl font-bold text-center mb-5">
      {{ $t('m_presentation_text_1') }}
    </h2>

    <form @submit.prevent="submitForm" class="flex w-full flex-col text-center">
      <div class="flex flex-col">
        <label for="phone-modals" class="flex text-white text-xs mb-[10px] md:text-base">
          {{ $t('m_message_text_2') }}
        </label>

        <div class="phone-intl">
          <ClientOnly>
            <IntlTelInput
              ref="phoneInput"
              :options="{
                initialCountry: 'id',
                countryOrder: ['id', 'ua', 'ru', 'by'],
                separateDialCode: false,
                countrySearch: false,
                strictMode: true,
              }"
              :input-props="{
                placeholder: '+62 999-99-9999',
                maxlength: 20,
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
import { useFormsStore } from '~/stores/functions/forms';
import { useModalsStore } from '~/stores/functions/modals';

const modalsStore = useModalsStore();

const pagesStore = usePagesStore();
const langStore = useLangStore();
const formsStore = useFormsStore();
const allPages = ref([]);

const currentForm = formsStore?.forms?.filter((item) => item.slug === 'showcase-form')[0];

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
  e.target.value = e.target.value.replace(/[^\d+]/g, '');
  phone.value = e.target.value;
};

const resetForm = () => {
  phone.value = '';
  if (phoneInput.value?.instance) {
    phoneInput.value.instance.setNumber('');
  }
};

const submitForm = async () => {

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

    try {
      await useFetch('/api/send-form', {
        method: 'POST',
        body: {
          phone: phone.value,
          form: 'Получить презентацию / Получить каталог',
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
</script>
