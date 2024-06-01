import { defineStore } from 'pinia';

export const useModalsStore = defineStore('modalsStore', {
    state: () => ({
        modals: [],
    }),
    actions: {
        addModal(modal) {
            this.modals.push(modal)
        },
        removeModal(modal) {
            this.modals = this.modals.filter(item => item !== modal)
        },
    }
})