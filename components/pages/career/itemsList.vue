<template>

  <PagesCareerItem v-for="item in data" :key="item.id" :item="item" />

</template>

<script setup>
import fetchCareer from '~/server/api/career';

const { getItems } = useDirectusItems();

const { data } = await fetchCareer(getItems);
</script>
