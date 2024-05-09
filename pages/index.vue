<template>
  <Banner/>

  <Services/>

  <Map/>

  <Reasons/>

  <Numbers/>

  <section class="company">
    <div class="container hidden">
      <div>
        img
      </div>
    </div>
  </section>
</template>

<script setup>
import {useModalsStore} from "./../../stores/modals.js";
import Banner from "./../components/pages/main/Banner.vue";
import Services from "./../components/pages/main/Services.vue";
import Map from "./../components/pages/main/Map.vue";
import Reasons from "./../components/pages/main/Reasons.vue";
import Numbers from "./../components/pages/main/Numbers.vue";

const modalStore = useModalsStore()
const modalsStore = useModalsStore()

const addModal = () => {
  modalsStore.addModal("test");
}


</script>
