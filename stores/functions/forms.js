import { defineStore } from 'pinia';

export const useFormsStore = defineStore('formsStore', {
    state: () => ({
        forms: [],
    }),
    actions: {
        setForms(data) {
            this.forms = data;
        },
    }
})