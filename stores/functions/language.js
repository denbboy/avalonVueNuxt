import { defineStore } from 'pinia';

export const useLangStore = defineStore('langStore', {
    state: () => ({
        lang: "ru",
    }),
    actions: {
        setLang(lang) {
            this.lang = lang
        },
    }
})