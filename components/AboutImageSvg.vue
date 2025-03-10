<template>
  <svg class="relative z-10 ml-auto" width="770" height="" viewBox="0 0 770 536" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Определяем маску -->
      <mask id="mask0" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="770" height="536">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M769.435 227.305C781.919 392.15 585.441 471.248 426.439 516.212C290.998 554.514 137.659 543.086 54.4846 429.485C-29.5354 314.729 -13.0379 151.093 80.9902 44.3921C156.539 -41.3391 280.545 18.3314 390.954 47.666C540.161 87.3086 757.77 73.2879 769.435 227.305Z"
          fill="white" />
      </mask>
    </defs>

    <!-- Применяем маску и корректируем размер изображения -->
    <g mask="url(#mask0)">
      <image 
        :href="imageUrl" 
        width="770" height="536"
        x="0" y="0" 
        preserveAspectRatio="xMidYMid slice"
      />
    </g>
  </svg>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps(["itemInfo", "locale"]);

const imageUrl = computed(() => {
  const imagePath = props.itemInfo?.main_translations?.find(item =>
    item.languages_code?.includes(props.locale)
  )?.image;

  return imagePath ? `https://avalon-panel.sonisapps.com/assets/${imagePath}?width=770&height=536` : "";
});
</script>
