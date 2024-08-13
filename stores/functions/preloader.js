import { defineStore } from 'pinia';

export const usePreloaderStore = defineStore('preloaderStore', {
    state: () => ({
        isPreloaderOn: false
    }),
    actions: {
        start() {
            this.isPreloaderOn = true;
        },
        stop() {
            this.isPreloaderOn = false;
        }
    }
})