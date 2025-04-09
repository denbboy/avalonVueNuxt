<template>
  <div>
    <h1 v-if="error.statusCode">{{ error.statusCode }} - {{ error.message }}</h1>
    <p>{{ error.statusMessage }}</p>
  </div>
</template>

<script setup>
const error = useError();
</script>
