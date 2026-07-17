import { defineStore } from 'pinia';

export const useProjectsStore = defineStore('projectsStore', {
    state: () => ({
        projects: [],
    }),
    actions: {
        setProjects(data) {
            this.projects = data;
        },
    }
})