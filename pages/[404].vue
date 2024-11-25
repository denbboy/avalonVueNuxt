<script setup>
const error = useError();
</script>

<template>
  <section class="pb-24 pt-64 relative bg-blue-500 overflow-hidden">

    <div class="container">

      <NuxtImg src="/img/404.png" loading="lazy" class="mx-auto" format="png" alt="Not found" width="960" />

      <p class="text-white md:text-lg mt-7 md:mt-12 text-center mx-auto max-w-4xl">
        {{  $t('404_text')  }}
      </p>
      <NuxtLink to="/" class="white-button mx-auto mt-7 md:mt-12">
        {{  $t('404_button')  }}
      </NuxtLink>

      <div class="absolute -right-[38px] top-[200px] w-[76px] z-10 md:w-[280px] md:-right-[140px]">
        <NuxtImg loading="lazy" src="/img/icons/vector-logo.svg" class="w-full" alt="vector-logo" />
      </div>
      <div class="absolute -left-[38px] bottom-[200px] w-[76px] z-10 md:w-[280px] md:-left-[140px]">
        <NuxtImg loading="lazy" src="/img/icons/vector-logo.svg" class="w-full" alt="vector-logo" />
      </div>

    </div>

  </section>
</template>

<style scoped></style>
