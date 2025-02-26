<template>

  <section id="location" class="map py-14 md:py-24 relative overflow-hidden">
    <div
      class="absolute hidden lg:block lg:-right-36 top-0 lg:top-0 lg:left-auto lg:bottom-40 -left-14 w-28 lg:w-72 z-[2]">
      <NuxtImg loading="lazy" src="/img/icons/vector-logo.svg" class="w-full" alt="vector-logo" />
    </div>
    <div
      class="absolute hidden lg:block lg:-left-36 top-0 lg:top-auto lg:right-auto lg:bottom-40 -left-14 w-28 lg:w-72 z-[2]">
      <NuxtImg loading="lazy" src="/img/icons/vector-logo.svg" class="w-full" alt="vector-logo" />
    </div>
    <div class="container relative z-10">
      <h2 data-aos="fade-up" class="font-bold text-white text-3xl text-center mb-8 lg:hidden">
        {{ $t('top_location') }}
      </h2>

      <div class="overflow-hidden rounded-t-2xl mb-7 md:mb-0 lg:rounded-none lg:rounded-t-2xl">

        <div id="map"></div>
      </div>

      <div
        class="flex flex-col md:flex-row mt-[30px] md:items-center md:justify-between md:gap-[30px] gap-5 md:py-10 md:px-7 md:border md:border-whiteOp-300 md:rounded-b-2xl md:mt-[-1px]">
        <p class=" text-white text-base text-center md:text-start md:text-xl lg:text-left lg:m-0">
          {{ $t('google_map_text_1') }}
        </p>
        <button @click="handleOpenModal" type="button" class="white-button px-7 mx-auto lg:mx-0 xl:px-[60px]">
          {{ $t('make_a_see') }}
        </button>
      </div>
    </div>
  </section>
  

</template>

<style scoped>
#map {
  height: 500px;
  width: 100%;
}

@media (min-width: 1441px) {
  #map {
    height: 700px;
  }
}
</style>


<script setup>
import { ref, watch } from 'vue'


const modalsStore = useModalsStore()

const props = defineProps(['itemData']);

const handleOpenModal = () => {
  modalsStore.addModal('presentation')
}

setTimeout(() => {
  (g => { var h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document, b = window; b = b[c] || (b[c] = {}); var d = b.maps || (b.maps = {}), r = new Set, e = new URLSearchParams, u = () => h || (h = new Promise(async (f, n) => { await (a = m.createElement("script")); e.set("libraries", [...r] + ""); for (k in g) e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]); e.set("callback", c + ".maps." + q); a.src = `https://maps.${c}apis.com/maps/api/js?` + e; d[q] = f; a.onerror = () => h = n(Error(p + " could not load.")); a.nonce = m.querySelector("script[nonce]")?.nonce || ""; m.head.append(a) })); d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)) })({
    key: "AIzaSyCbpqXlTw8-yA0fa9vECkTrSKJq1L1_Wkw",
    v: "weekly",
    // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
    // Add other bootstrap parameters as needed, using camel case.
  });
}, 10)


let map;

async function initMap(cood1, cood2) {

  const position = { lat: cood1 ?? 0, lng: cood2 ?? 0 };
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 14,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  const parser = new DOMParser();
  const pinSvgString = `
  <svg width="102" height="120" viewBox="0 0 102 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g class="relative flex items-center justify-center">
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M50.4811 6.89648C26.1072 6.89648 6.20703 26.396 6.20703 50.3366C6.20703 66.9634 16.9152 82.1292 27.105 93.3887C37.298 104.648 47.5074 112.135 47.5074 112.135C48.3584 112.764 49.3953 113.103 50.4648 113.103C51.531 113.103 52.568 112.764 53.419 112.135C53.419 112.135 63.6218 104.648 73.8116 93.3887C84.0013 82.1292 94.7128 66.9634 94.7128 50.3366C94.7128 26.396 74.855 6.89648 50.4811 6.89648Z"
        fill="#0E88EC" />
      <path d="M47.3077 118.906L47.6007 118.501L47.6004 118.5L47.5989 118.499L47.5929 118.495L47.5683 118.477L47.4696 118.405C47.3822 118.341 47.2519 118.244 47.0818 118.117C46.7414 117.863 46.2413 117.484 45.6044 116.99C44.3305 116.002 42.5093 114.552 40.3238 112.704C35.952 109.009 30.1259 103.728 24.3061 97.3869C12.6444 84.6763 0.5 67.6644 0.5 49.0817C0.5 22.3235 23.0552 0.5 50.7139 0.5C78.3721 0.5 100.879 22.3229 100.879 49.0817C100.879 67.6644 88.7312 84.6762 77.0695 97.3869C71.2515 103.728 65.4282 109.009 61.0587 112.704C58.8743 114.552 57.0542 116.002 55.7811 116.99C55.1445 117.484 54.6447 117.863 54.3046 118.117C54.1345 118.244 54.0044 118.341 53.917 118.405L53.8184 118.477L53.7938 118.495L53.7878 118.499L53.7864 118.501L53.786 118.501L54.0792 118.906L53.786 118.501L53.7845 118.502C52.8967 119.149 51.8125 119.5 50.6952 119.5C49.5741 119.5 48.49 119.149 47.6023 118.502L47.6007 118.501L47.3077 118.906Z"
        stroke="#0E88EC" />

      <foreignObject x="20" y="15" width="60" height="80">
        <img xmlns="http://www.w3.org/1999/xhtml" class="absolute mb-3 w-14 h-16 object-contain" 
             src="https://avalon-panel.sonisapps.com/assets/${props.itemData.logo}" 
             alt="Marker Icon"/>
      </foreignObject>
      
    </g>
  </svg>
`;

  const pinSvg = parser.parseFromString(
    pinSvgString,
    "image/svg+xml",
  ).documentElement;

  new AdvancedMarkerElement({
    map,
    position: position,
    content: pinSvg,
    title: "A marker using a custom SVG image.",
  });
}


watch(
  () => props.itemData,
  (newValue) => {
    if (newValue && newValue.location && newValue.location.coordinates) {
      setTimeout(() => {
        initMap(newValue.location.coordinates[1], newValue.location.coordinates[0]);
      }, 500)
    }
  },
  { immediate: true } // Можно добавить эту опцию для немедленного выполнения
);

onMounted(() => {
  initMap(props.itemData.location.coordinates[1], props.itemData.location.coordinates[0]);
});

</script>
