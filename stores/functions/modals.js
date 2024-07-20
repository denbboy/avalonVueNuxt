import { defineStore } from 'pinia';

export const useModalsStore = defineStore('modalsStore', {
    state: () => ({
        modals: [],
        modalData: {}
    }),
    actions: {
        addModal(modal) {
            this.modals.push(modal)
        },
        removeModal(modal) {
            this.modals = this.modals.filter(item => item !== modal)
        },

        setModalData(data) {
            this.modalData = data
        },
        removeModalData() {
            this.modalData = {}
        },
    }
})