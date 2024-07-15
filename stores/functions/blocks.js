import { defineStore } from 'pinia';

export const useBlocksStore = defineStore('blocksStore', {
    state: () => ({
        blocks: [],
    }),
    actions: {
        setBlocks(data) {
            this.blocks = data;
        },
    }
})