<template>
  <header class="bg-blue-500 py-4 fixed top-0 left-0 w-full border-b border-b-whiteOp-300 z-10">
    <div class="container">
      <div class="header__inner flex items-center justify-between">
        <NuxtLink to="/">
          <img src="/assets/img/icons/logo-mob.svg" alt="logo ic">
        </NuxtLink>
        <button type="button"><img src="/assets/img/icons/burder.svg" alt="burger ic"></button>
      </div>
    </div>
  </header>
</template>

<script setup>
const {header} = defineProps(['header'])
</script>
