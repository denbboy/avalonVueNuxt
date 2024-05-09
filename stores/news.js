import { defineStore } from 'pinia';

export const useNewsStore = defineStore('newsStore', {
    state: () => ({
        newsList: []
    }),
    actions: {
        addNewsItem(newsItem) {
            this.newsList.push(newsItem)
        }
    }
})