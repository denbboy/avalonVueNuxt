<template>
  <Transition>
    <div v-if="modals[0]" class="modal fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center">
      <div class="modal__bgd bg-black/70 absolute w-full h-full z-10" @click="closeModal">

      </div>
      <div class="modal__content absolute z-20 bg-white p-4 rounded-xl">
        <div class="modal__close absolute -top-5 -right-3 text-white cursor-pointer" @click="closeModal">
          x
        </div>
        {{ modals[0] }}
      </div>
    </div>
  </Transition>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

<script setup>
import {useModalsStore} from "./../../stores/modals.js";
import {ref, watch} from 'vue';

const showModal = ref(false);
const modalStore = useModalsStore();
const {modals} = storeToRefs(modalStore)

const closeModal = () => {
  modalStore.removeModal("test");
}

watch(() => modalStore[0], () => {
  showModal.value = !!modalStore[0];
});
</script>
