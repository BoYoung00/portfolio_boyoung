import { createStore } from 'vuex';
import {Project, Skill, State} from "@/type/moudules";

export default createStore<State>({
    state: {
        projects: [
            { id: 1, title: 'Project 1', description: 'This is a sample project.' },
            { id: 2, title: 'Project 2', description: 'This is another project.' },
        ],
        skillsLan: [
            { name: 'React', percent: 90, icon: 'fa-brands fa-react' },
            { name: 'Vue3', percent: 75, icon: 'fa-brands fa-vuejs' },
            { name: 'HTML5', percent: 90, icon: 'fa-brands fa-html5' },
            { name: 'CSS3', percent: 90, icon: 'fa-brands fa-css3' },
            { name: 'SCSS', percent: 90, icon: 'fa-brands fa-sass' },
            { name: 'JavaScript', percent: 80, icon: 'fa-brands fa-js' },
            { name: 'TypeScript', percent: 85, icon: 'fa-brands fa-js-square' },
            { name: 'Android', percent: 50, icon: 'fa-brands fa-android' },
            { name: 'JAVA', percent: 75, icon: 'fa-brands fa-java' },
            { name: 'Kotlin', percent: 75, icon: 'fa-brands fa-font-awesome' },
            { name: 'C++/C#', percent: 70, icon: 'fa-solid fa-c' },
            { name: 'Python', percent: 75, icon: 'fa-brands fa-python' },
            { name: 'Spring', percent: 75, icon: 'fa-brands fa-java' },
            { name: '.Net', percent: 50, icon: 'fa-brands fa-microsoft' },
            { name: 'JSP', percent: 80, icon: 'fa-brands fa-java' },
            { name: 'MySQL', percent: 80, icon: 'fa-solid fa-database' },
            { name: 'Oracle', percent: 75, icon: 'fa-solid fa-database' },
            { name: 'Django', percent: 65, icon: 'fa-brands fa-python' },
        ],
        skillsTool: [
            { name: 'jQuery', percent: 55, icon: 'fa-brands fa-square-js' },
            { name: 'Redux', percent: 65, icon: 'fa-brands fa-js' },
            { name: 'IntelliJ', percent: 80, icon: 'fa-brands fa-java' },
            { name: 'VSC', percent: 70, icon: 'fa-solid fa-code' },
            { name: 'VS2022', percent: 70, icon: 'fa-brands fa-microsoft' },
            { name: 'Eclipse', percent: 60, icon: 'fa-brands fa-java' },
            { name: 'PyCharm', percent: 70, icon: 'fa-brands fa-python' },
            { name: 'Git', percent: 75, icon: 'fa-brands fa-github' },
            { name: 'Figma', percent: 85, icon: 'fa-brands fa-figma' },
            { name: 'GCP', percent: 50, icon: 'fa-brands fa-google' },
            { name: 'AWS', percent: 50, icon: 'fa-brands fa-amazon' },
            { name: 'Vercel', percent: 55, icon: 'fa-brands fa-vuejs' },
            { name: 'Docker', percent: 50, icon: 'fa-brands fa-docker' },
            { name: 'StarUML', percent: 70, icon: 'fa-solid fa-star' },
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
            commit('addSkillsTool', skill);
        },
    },
});
