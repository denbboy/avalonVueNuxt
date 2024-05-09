<template>
  <div>
    <Header/>
    <slot/>

    <Modal/>
  </div>
</template>

<style scoped>
/*.router-link-exact-active {}*/
</style>

<script setup>
import Header from '../components/Header.vue'
import Modal from '../components/modals/Modal.vue'
</script>
