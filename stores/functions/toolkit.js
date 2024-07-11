import { defineStore } from 'pinia';

export const useToolkit = defineStore('toolkitStore', {
    state: () => ({
        settings: {}
    }),
    actions: {
        setSettings(data) {
            this.settings = data;
        }
    }
})