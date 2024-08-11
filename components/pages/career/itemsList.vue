<template>

  <PagesCareerItem v-for="item in careerData.data.value" :key="item.id" :item="item" />

</template>

<script setup>

const careerData = useAsyncData("Career", () => $fetch('/api/career'))

console.log(careerData);

</script>
