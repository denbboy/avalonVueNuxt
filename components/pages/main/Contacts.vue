<template>
  <section class="contat pb-14 md:pb-24 z-[2]" data-aos="fade-up">
    <div class="container">
      <form
        @submit.prevent="submitForm"
        class="flex flex-col p-5 lg:py-12 lg:px-[130px] border border-whiteOp-300 rounded-2xl text-center md:p-12 relative"
      >
        <img
          loading="lazy"
          width="100"
          src="/img/index/dot-decor.png"
          class="absolute right-[-1px] bottom-[-1px] w-5 md:w-8"
          alt="decor"
        />
        <h2 class="font-bold text-white text-2xl mb-4 md:text-3xl md:mb-7 leading-[100%]">
          {{ $t('want_know_more') }}
        </h2>
        <div class="flex flex-col md:flex-row gap-2 lg:gap-5">
          <input
            v-model="name"
            type="text"
            :placeholder="$t('input_name')"
            class="bg-whiteOp-200 rounded-xl text-white text-sm px-5 py-4 outline-none lg:p-6 lg:text-base w-full md:w-auto md:flex-shrink"
          />
          <div class="phone-intl md:flex-grow h-full">
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
                  class="bg-whiteOp-200 rounded-xl text-white text-sm px-5 py-4 outline-none lg:p-6 lg:text-base w-full md:h-full"
                />
              </template>
            </ClientOnly>
          </div>

          <button type="submit" class="white-button w-full md:w-auto md:flex-shrink">
            {{ $t('send_mail') }}
          </button>
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
      </form>
    </div>
  </section>
</template>

<style scoped>
.phone-vti {
  width: 100%;
}
</style>

<script setup>
import { ref, watch } from 'vue';
import { usePagesStore } from '~/stores/functions/pages';
import { useToolkit } from '~/stores/functions/toolkit';
import { useReCaptcha } from 'vue-recaptcha-v3';
import { useFormsStore } from '~/stores/functions/forms';

const recaptchaInstance = useReCaptcha();

const recaptcha = async () => {
  await recaptchaInstance?.recaptchaLoaded();
  const token = await recaptchaInstance?.executeRecaptcha('yourActionHere');
  return token;
};

const pagesStore = usePagesStore();
const langStore = useLangStore();
const formsStore = useFormsStore();
const allPages = ref([]);

const currentForm = formsStore?.forms?.filter((item) => item.slug === 'showcase-form')[0];

watch(pagesStore, (newValue) => {
  allPages.value = newValue?.pagesList;
});

const name = ref(null);
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
  name.value = '';
  phone.value = '';
  if (phoneInput.value?.instance) {
    phoneInput.value.instance.setNumber('');
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
    if (phoneInput.value?.instance) {
      phone.value = phoneInput.value.instance.getNumber();
    }

    if (!name.value || !phone.value || phone.value.length < 10) {
      isError.value = true;
      return;
    } else {
      isError.value = false;
    }

    isSending.value = true;

    try {
      const url = useRequestURL();
      const clearUrl = url.href.split('?')[0];

      await useFetch('/api/send-form', {
        method: 'POST',
        body: {
          name: name.value,
          phone: phone.value,
          form: 'Узнать больше',
          url: clearUrl,
        },
      }).then((res) => {
        isSending.value = false;
        isSuccess.value = true;
        resetForm();
      });
    } catch (err) {
      isSending.value = false;
    }
  } catch (error) {
    console.error('Contact form could not be sent', error);
  }
};
</script>

<style scoped>
.phone-intl {
  display: flex;
  flex-direction: column;
}

@media (min-width: 768px) {
  .phone-intl :deep(.iti) {
    width: 100%;
    height: 100% !important;
  }

  .phone-intl :deep(.iti__input) {
    height: 100%;
  }
}
</style>
