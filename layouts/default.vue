<template>
  <div class="flex flex-col min-h-[200vh] justify-between">
    <Header/>

    <slot/>

    <Modal/>
    <Footer/>
  </div>
</template>

<style scoped>
/*.router-link-exact-active {}*/
</style>

<script setup>
</script>
