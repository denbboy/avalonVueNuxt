import { defineStore } from 'pinia';

export const useLangStore = defineStore('langStore', {
    state: () => ({
        lang: "en",
    }),
    actions: {
        setLang(lang) {
            this.lang = lang
        },
    }
})