import { defineStore } from 'pinia';

export const usePagesStore = defineStore('pagesStore', {
    state: () => ({
        pagesList: []
    }),
    actions: {
        setPages(data) {
            this.pagesList = data;
        }
    }
})