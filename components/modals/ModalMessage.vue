<template>
    <img src="/assets/img/modals/modal-banner.jpg" class="mt-10 lg:-mt-10 w-full lg:rounded-t-[20px] max-w-none "
        alt="ph">


    <div
        class="content__inner z-0 relative overflow-hidden p-5 lg:p-10 max-w-[600px] flex flex-col items-center justify-center h-full">

        <div class="absolute right-[-34px] -top-5 lg:top-5 z-0">
            <img src="/assets/img/icons/vector-logo.svg" class="w-[68px]" alt="vector-logo">
        </div>
        <div class="absolute left-[-34px] bottom-0 lg:bottom-[154px] z-0">
            <img src="/assets/img/icons/vector-logo.svg" class="w-[68px]" alt="vector-logo">
        </div>

        <h2 class="text-white text-lg md:text-2xl font-bold text-center mb-5 ">
            Оставьте контакт и получите специальное предложение до 29 февраля
        </h2>

        <form @submit.prevent="submitForm" class="flex w-full flex-col text-center">

            <div class="flex flex-col">
                <label for="phone-modal" class="flex text-white text-xs mb-[10px]">
                    Телефон для связи в мессенджерах*
                </label>
                <div class="phone-vti">
                    <VueTelInput :inputOptions="inputOptions" v-model="phone" :preferred-countries="preferredCountries" :only-countries="sortedCountries" />
                </div>

                <p class="text-red-700 text-left transition-all h-full" :class="{
                    'max-h-10 opacity-100 mt-2': isError,
                    'max-h-0 opacity-0': !isError
                }">
                    Пожалуйста, заполните все поля в форме
                </p>
                <p class="text-white/50 text-left transition-all h-full" :class="{
                    'max-h-10 opacity-100 mt-2': isSending,
                    'max-h-0 opacity-0': !isSending
                }">
                    Подождите, идет отправка
                </p>
                <p class="text-green-500 text-left transition-all h-full" :class="{
                    'max-h-10 opacity-100 mt-2': isSuccess,
                    'max-h-0 opacity-0': !isSuccess
                }">
                    Ваше сообщение успешно отправлено
                </p>

                <button type="submit" class="white-button w-full mt-5 lg:leading-[120%] lg:py-5 leading-[90%]">
                    Отправить
                </button>

                <p class="text-center text-white text-xs lg:text-sm w-full mt-5">Нажимая на кнопку “Отправить резюме”,
                    вы соглашаетесь с нашей <a href="#"
                        class="text-blue-400 font-bold underline transition-all hover:text-blue-700">Политикой
                        конфиденциальности</a></p>

            </div>
        </form>

    </div>
</template>

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

const currentForm = formsStore.forms.length && formsStore.forms?.filter(item => item.slug === "offer-form")[0]

watch(pagesStore, (newValue) => {
    allPages.value = newValue?.pagesList;
});

const phone = ref(null);
const isError = ref(null);
const errorText = ref('');
const isSending = ref(false);
const isSuccess = ref(false);

const toolkitStore = useToolkit();

const resetForm = () => {
    phone.value = '';
};

const placeholderLang = {
    'ru': 'Введите ваш номер телефона',
    'en': 'Enter your phone number',
    'ua': 'Введіть ваш номер телефону'
}

const inputOptions = {
  placeholder: placeholderLang[langStore.lang]
};

const submitForm = async () => {
    if (currentForm?.captcha) {
        if (!recaptcha()) {
            errorText.value = 'Recaptcha error'
            return isError.value = true
        }
    }

    try {
        if (!phone.value) {
            isError.value = true;
            return;
        } else {
            isError.value = false;
        }

        const result = await formRequest();
        isSending.value = true;

        try {
            const { data } = await useFetch('https://crm.g-plus.app/api/actions', {
                method: 'POST',
                body: {
                    action: 'partner-custom-form',
                    token: '123',
                    partner_id: '123',
                    phone: phone.value,
                    building_id: '123',
                    lang: 'ua',
                    note: 'Запит з форми контактів',
                    adv_id: '123123123'
                }
            });

            isSending.value = false;
            isSuccess.value = true;
            resetForm();
        } catch (err) {
            console.log('11111', err);
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

const client = createDirectus('https://avalon-panel.sonisapps.com').with(rest());

const formRequest = async () => {
    const formData = new FormData();
    formData.append('phone', phone.value);

    const result = await client.request(
        readFlow('78957f27-5d57-49a2-bdfe-93be73e7e487', {
            fields: ['*'],
            body: formData,
            method: 'POST'
        })
    );
}

</script>
