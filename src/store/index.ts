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
    skillsLan: Skill[];
    skillsTool: Skill[];
}

export default createStore<State>({
    state: {
        projects: [
            { id: 1, title: 'Project 1', description: 'This is a sample project.' },
            { id: 2, title: 'Project 2', description: 'This is another project.' },
        ],
        skillsLan: [
            { name: 'React', percent: 90 },
            { name: 'Vue3', percent: 75 },
            { name: 'HTML5', percent: 90 },
            { name: 'CSS3', percent: 90 },
            { name: 'SCSS', percent: 90 },
            { name: 'JavaScript', percent: 85 },
            { name: 'TypeScript', percent: 90 },
            { name: 'Android', percent: 65 },
            { name: 'JAVA', percent: 80 },
            { name: 'Kotlin', percent: 80 },
            { name: 'C / C++ / C#', percent: 70 },
            { name: 'Python', percent: 75 },
            { name: 'Spring', percent: 75 },
            { name: '.Net', percent: 70 },
            { name: 'JSP', percent: 80 },
            { name: 'MySQL', percent: 80 },
            { name: 'Oracle', percent: 75 },
            { name: 'Django', percent: 70 },
            { name: 'jQuery', percent: 65 },
            { name: 'Redux', percent: 65 },
        ],
        skillsTool: [
            { name: 'IntelliJ', percent: 80 },
            { name: 'Visual Studio Code', percent: 70 },
            { name: 'Visual Studio 2022', percent: 90 },
            { name: 'Eclipse', percent: 60 },
            { name: 'PyCharm', percent: 70 },
            { name: 'Git Hub', percent: 75 },
            { name: 'Source tree', percent: 70 },
            { name: 'Figma', percent: 85 },
            { name: 'GCP', percent: 50 },
            { name: 'AWS', percent: 50 },
            { name: 'Vercel', percent: 55 },
            { name: 'StarUML', percent: 70 },
            { name: 'Ps', percent: 50 },
            { name: 'Unity', percent: 55 },
        ],
    },
    mutations: {
        addItem(state, item: Project) {
            state.projects.push(item);
        },
        addSkillsLan(state, skill: Skill) {
            state.skillsLan.push(skill);
        },
        addSkillsTool(state, skill: Skill) {
            state.skillsTool.push(skill);
        },
    },
    actions: {
        addItem({ commit }, item: Project) {
            commit('addItem', item);
        },
        addSkillsLan({ commit }, skill: Skill) {
            commit('addSkillsLan', skill);
        },
        addSkillsTool({ commit }, skill: Skill) {
            commit('skillsTool', skill);
        },
    },
});
