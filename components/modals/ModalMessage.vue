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
                    <VueTelInput v-model="phone" :only-countries="onlyCountries" />
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

<script>
import { ref } from 'vue';
import { VueTelInput } from 'vue-tel-input';
import 'vue-tel-input/vue-tel-input.css';

export default {
    components: {
        VueTelInput,
    },
    setup() {
        const name = ref(null);
        const phone = ref(null);
        const isError = ref(null);
        const isSending = ref(null);
        const isSuccess = ref(null);

        const resetForm = () => {
            name.value = "";
            phone.value = "";
        }

        const submitForm = () => {
            console.log(name.value, phone.value, isError.value);

            if (!name.value || !phone.value) return isError.value = true
            else isError.value = false

            isSending.value = true

            setTimeout(() => {
                isSending.value = false
                isSuccess.value = true

                resetForm()
            }, 1000)

        };

        const onlyCountries = [
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
        return {
            phone,
            name,
            isError,
            isSending,
            isSuccess,
            submitForm,
            onlyCountries
        };
    },
};
</script>
