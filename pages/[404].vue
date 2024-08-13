<script setup>
const error = useError();
</script>

<template>
  <section class="pb-24 pt-64 relative bg-blue-500 overflow-hidden">

    <div class="container">

      <NuxtImg src="/img/404.png" loading="lazy" class="mx-auto" format="png" alt="Not found" width="960" />

      <p class="text-white md:text-lg mt-7 md:mt-12 text-center mx-auto">
        Кажется что-то пошло не так! Страница, которую вы запрашиваете, не существует. <br>Возможно она
        устарела,
        или был введен неверный адрес в адресной строке.
      </p>
      <NuxtLink to="/" class="white-button mx-auto mt-7 md:mt-12">
        Перейти на главную
      </NuxtLink>

      <div class="absolute -right-[38px] top-[200px] w-[76px] z-10 md:w-[280px] md:-right-[140px]">
        <NuxtImg src="/img/icons/vector-logo.svg" loading="lazy" class="mx-auto" format="svg" alt="Vector" width="960" />
      </div>
      <div class="absolute -left-[38px] bottom-[200px] w-[76px] z-10 md:w-[280px] md:-left-[140px]">
        <NuxtImg src="/img/icons/vector-logo.svg" loading="lazy" class="mx-auto" format="svg" alt="Vector" width="960" />
      </div>

    </div>

  </section>
</template>

<style scoped></style>
