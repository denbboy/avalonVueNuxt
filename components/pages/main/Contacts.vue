<template>
  <section class="contat pb-14 md:pb-24" data-aos="fade-up">
    <div class="container">
      <form @submit.prevent="submitForm"
        class="flex flex-col p-5 lg:py-12 lg:px-[130px] border border-whiteOp-300 rounded-2xl text-center md:p-12 relative">
        <img src="/assets/img/index/dot-decor.png" class="absolute right-[-1px] bottom-[-1px] w-5 md:w-8" alt="decor">
        <h2 class="font-bold text-white text-2xl mb-4 md:text-3xl md:mb-7 leading-[100%]">
          Хотите узнать больше?
        </h2>
        <div class="flex flex-col md:flex-row gap-2 lg:gap-5">
          <input v-model="name" type="text" placeholder="Имя"
            class="bg-whiteOp-200 rounded-xl text-white text-sm px-5 py-4 outline-none lg:p-6 lg:text-base w-full">
          <div class="phone-vti">
            <VueTelInput :use-masking="true" placeholder="Введите номер телефона" v-model="phone" :only-countries="onlyCountries" />
          </div>

          <button type="submit" class="white-button w-full">
            Отправить заявку
          </button>
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
      </form>
    </div>
  </section>
</template>

<style scoped>
.phone-vti {
  width: 100%;
}
</style>

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
