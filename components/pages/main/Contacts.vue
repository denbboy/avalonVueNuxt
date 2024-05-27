<template>
  <section class="contat pb-14 md:pb-24">
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
            <VueTelInput :use-masking="true" placeholder="Введите номер телефона" v-model="phone" />
          </div>

          <button type="submit" class="white-button w-full">
            Отправить заявку
          </button>
        </div>
        <p v-if="isError" class="text-red-700 text-left mt-2">
          Пожалуйста, заполните все поля в форме
        </p>
        <p v-if="isSending" class="text-white/50 text-left mt-2">
          Подождите, идет отправка
        </p>
        <p v-if="isSuccess" class="text-green-500 text-left mt-2">
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

    return {
      phone,
      name,
      isError,
      isSending,
      isSuccess,
      submitForm,
    };
  },
};
</script>
