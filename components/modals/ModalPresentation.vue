<template>
    <img src="/assets/img/modals/modal-banner-2.jpg" class="mt-10 lg:-mt-10 w-full lg:rounded-t-[20px] max-w-none "
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
            Оставьте контакт, чтобы получить презентацию по нашим проектам
        </h2>

        <form action="" @submit.prevent="submitForm" class="flex w-full flex-col text-center">

            <div class="flex flex-col">
                <label for="phone-modals" class="flex text-white text-xs mb-[10px] md:text-base">
                    Телефон для связи в мессенджерах*
                </label>

                <div class="phone-vti">
                    <VueTelInput v-model="phone" :only-countries="onlyCountries" />
                </div>

                <label for="some" class="flex flex-col text-start mb-[10px] mt-5">
                    <span class="text-white text-xs md:text-base">
                        Альтерентивный способ связи*
                    </span>
                    <span class="text-white/50 text-xs">
                        Это может быть ещё 1 номер телефона, email, имя пользователя Telegram и т.д
                    </span>
                </label>
                <input type="text" v-model="name" id="some"
                    class="bg-whiteOp-200 rounded-xl text-white text-sm px-5 py-4 outline-none lg:p-6 lg:text-base w-full"
                    placeholder="Альтерентивный способ связи*">

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
                    Получить предложение
                </button>

                <p class="text-center text-white text-xs lg:text-sm w-full mt-5">Вы также можете <a href="#"
                        class="text-blue-400 font-bold underline transition-all hover:text-blue-700">связаться с нами в
                        WhatsApp</a> прямо сейчас, отправив нам любой символ или эмодзи</p>

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
