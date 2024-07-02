<template>
  <Transition>
    <div v-if="modals[0]" class="z-50 relative">
      <div
        class="transition-all modal fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center modal-special modal">
        <div class="modal__bgd absolute top-0 left-0 bg-[#031523]/90 w-full h-full z-0" @click="closeModal">
        </div>
        <div
          class="modal__content relative z-10 bg-blue-500 md:rounded-[20px] h-full md:h-auto flex items-center justify-center flex-col">
          <div class="modal__cross modal__close absolute top-2 right-2 md:-top-10 z-[1] md:-right-10 cursor-pointer"
            @click="closeModal">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect class="hidden md:block" opacity="0.2" x="0.5" y="0.5" width="29" height="29" rx="9.5"
                stroke="white" />
              <g class="opacity-100 md:opacity-50">
                <rect x="8.05469" y="7" width="20.9207" height="1.49433" transform="rotate(45 8.05469 7)"
                  fill="white" />
                <rect x="7" y="21.9434" width="20.9207" height="1.49433" transform="rotate(-45 7 21.9434)"
                  fill="white" />
              </g>
            </svg>
          </div>

          <ModalsModalPresentation v-if="modals[0] === 'presentation'" />
          <ModalsModalCalendar v-if="modals[0] === 'calendar'" />
          <ModalsModalMessage v-if="modals[0] === 'message'" />
          <ModalsModalVacancy v-if="modals[0] === 'vacancy'" />

        </div>
      </div>
    </div>
  </Transition>
  <Transition>
    <div v-if="modals[1]" class="z-50 relative">
      <div
        class="transition-all modal fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center modal-special modal">
        <div class="modal__bgd absolute top-0 left-0 bg-[#031523]/90 w-full h-full z-0" @click="closeModal">
        </div>
        <div
          class="modal__content relative z-10 bg-blue-500 md:rounded-[20px] h-full md:h-auto flex items-center justify-center flex-col">
          <div class="modal__cross modal__close absolute top-2 right-2 md:-top-10 z-[1] md:-right-10 cursor-pointer"
            @click="closeModal">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect class="hidden md:block" opacity="0.2" x="0.5" y="0.5" width="29" height="29" rx="9.5"
                stroke="white" />
              <g class="opacity-100 md:opacity-50">
                <rect x="8.05469" y="7" width="20.9207" height="1.49433" transform="rotate(45 8.05469 7)"
                  fill="white" />
                <rect x="7" y="21.9434" width="20.9207" height="1.49433" transform="rotate(-45 7 21.9434)"
                  fill="white" />
              </g>
            </svg>
          </div>

          <ModalsModalPresentation v-if="modals[1] === 'presentation'" />
          <ModalsModalCalendar v-if="modals[1] === 'calendar'" />
          <ModalsModalMessage v-if="modals[1] === 'message'" />
          <ModalsModalVacancy v-if="modals[1] === 'vacancy'" />

        </div>
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
import { ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useModalsStore } from '../../stores/functions/modals.js';
import 'vue-tel-input/vue-tel-input.css';

// Modal Store
const modalsStore = useModalsStore();
const { modals } = storeToRefs(modalsStore);
const showModal = ref(false);

// Watcher for modals
watch(modals, (newModals) => {
  showModal.value = newModals.length > 0;
});

// Close Modal Function
const closeModal = () => {
  modalsStore.removeModal(modals.value[modals.value.length - 1]);
};
</script>
