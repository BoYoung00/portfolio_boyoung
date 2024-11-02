import { createStore } from 'vuex';

interface Project {
    id: number;
    title: string;
    description: string;
}

interface Skill {
    name: string;
    percent: number;
}

interface State {
    projects: Project[];
    skills: Skill[];
}

export default createStore<State>({
    state: {
        projects: [
            { id: 1, title: 'Project 1', description: 'This is a sample project.' },
            { id: 2, title: 'Project 2', description: 'This is another project.' },
        ],
        skills: [
            { name: 'JavaScript', percent: 85 },
            { name: 'Vue.js', percent: 80 },
            { name: 'SCSS', percent: 75 },
            { name: 'REST API', percent: 70 },
        ],
    },
    mutations: {
        addItem(state, item: Project) {
            state.projects.push(item);
        },
        addSkill(state, skill: Skill) {
            state.skills.push(skill);
        },
    },
    actions: {
        addItem({ commit }, item: Project) {
            commit('addItem', item);
        },
        addSkill({ commit }, skill: Skill) {
            commit('addSkill', skill);
        },
    },
});
