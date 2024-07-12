import { defineStore } from 'pinia';

export const useProjectsStore = defineStore('projectsStore', {
    state: () => ({
        projects: [],
        currentProject: {},
    }),
    actions: {
        setProjects(data) {
            this.projects = data;
        },
        setCurrentProject(data) {
            this.currentProject = data;
        }
    }
})