<template>
  <section class="contat pb-14 md:pb-24 z-[2]" data-aos="fade-up">
    <div class="container">
      <form @submit.prevent="submitForm"
        class="flex flex-col p-5 lg:py-12 lg:px-[130px] border border-whiteOp-300 rounded-2xl text-center md:p-12 relative">
        <img loading="lazy" width="100" src="/img/index/dot-decor.png"
          class="absolute right-[-1px] bottom-[-1px] w-5 md:w-8" alt="decor" />
        <h2 class="font-bold text-white text-2xl mb-4 md:text-3xl md:mb-7 leading-[100%]">
          {{ $t('want_know_more') }}
        </h2>
        <div class="flex flex-col md:flex-row gap-2 lg:gap-5">
          <input v-model="name" type="text" :placeholder="$t('input_name')"
            class="bg-whiteOp-200 rounded-xl text-white text-sm px-5 py-4 outline-none lg:p-6 lg:text-base w-full">
          <div class="phone-vti">
            <!-- <VueTelInput :use-masking="true" placeholder="Введите номер телефона" v-model="phone" :only-countries="onlyCountries" /> -->
            <VueTelInput @input="inputPhoneNumber" :input-options="inputOptions" :use-masking="true" v-model="phone"
              :preferred-countries="preferredCountries" :only-countries="sortedCountries" />
          </div>

          <button type="submit" class="white-button w-full">
            {{ $t('send_mail') }}
          </button>
        </div>
        <p class="text-red-700 text-left transition-all h-full" :class="{
          'max-h-10 opacity-100 mt-2': isError,
          'max-h-0 opacity-0': !isError
        }">
          {{ $t('fill_all_fields') }}
        </p>
        <p class="text-white/50 text-left transition-all h-full" :class="{
          'max-h-10 opacity-100 mt-2': isSending,
          'max-h-0 opacity-0': !isSending
        }">
          {{ $t('wait_for_send') }}
        </p>
        <p class="text-green-500 text-left transition-all h-full" :class="{
          'max-h-10 opacity-100 mt-2': isSuccess,
          'max-h-0 opacity-0': !isSuccess
        }">
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
import { VueTelInput } from 'vue-tel-input';
import 'vue-tel-input/vue-tel-input.css';
import iso31661 from 'iso-3166-1';
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

const currentForm = formsStore?.forms?.filter(item => item.slug === "showcase-form")[0]

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
}

const toolkitStore = useToolkit();

const resetForm = () => {
  name.value = '';
  phone.value = '';
};

const placeholderLang = {
  'ru': 'Введите ваш номер телефона',
  'en': 'Enter your phone number',
  'ua': 'Введіть ваш номер телефону'
}

const inputOptions = {
  showDialCode: true,
  autoFormat: false,
  placeholder: placeholderLang[langStore.lang],
  maxlength: 15
};

const submitForm = async () => {
  if (currentForm?.captcha) {
    if (!recaptcha()) {
      errorText.value = 'Recaptcha error'
      return isError.value = true
    }
  }

  try {
    if (!name.value || !phone.value || phone.value.length < 10) {
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
          name: name.value,
          phone: phone.value,
          form: "know-more"
        }
      }).then(res => {
        isSending.value = false;
        isSuccess.value = true;
        resetForm();
      })

    } catch (err) {
      isSending.value = false;
    }

  } catch (error) {
    console.error('Contact form could not be sent', error)
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
const allCountries = iso31661.all().map(country => country.alpha2);

// Создаем computed property, который включает все страны
const sortedCountries = computed(() => {
  const preferredSet = new Set(preferredCountries);
  const unselectedCountries = allCountries.filter(country => !preferredSet.has(country));
  return [...preferredCountries, ...unselectedCountries];
});

import { createDirectus, rest, readFlow } from '@directus/sdk';

const client = createDirectus('https://api.avalonbali.com').with(rest());

const formRequest = async () => {
  // const formData = new FormData();
  // formData.append('name', name.value);
  // formData.append('phone', phone.value);

  // const result = await client.request(
  //     readFlow('9f9a3c27-6dcc-45b9-9bef-b5bf3f3a0330', {
  //         fields: ['*'],
  //         body: formData, // Передаем FormData в теле запроса
  //         method: 'POST' // Указываем метод запроса, если это POST-запрос
  //     })
  // );
}


</script>
