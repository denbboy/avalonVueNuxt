import { defineStore } from 'pinia';

export const useCurrentItemStore = defineStore('currentItemStore', {
    state: () => ({
        type: null,
        item: null,
    }),
    actions: {
        setCurrentItem(type, data) {
            this.type = type;
            this.item = data;
        },
        clearCurrentItem() {
            this.type = null;
            this.item = null;
        },
    },
});
