import { createStore } from 'vuex';
import {Project, Skill, State} from "@/type/moudules";

export default createStore<State>({
    state: {
        projects: [
            { id: 1, title: 'D-SIM', description: '데이터베이스 관리와 백엔드 개발을 간소화하고, 직관적인 UI/UX와 다양한 데이터 활용 기능을 제공하는 웹 서비스' },
            { id: 2, title: 'Data Source', description: '팀 협업을 위한 데이터베이스 관리 및 버전 제어 기능을 제공하며, 자동화된 템플릿 코드 지원을 통해 효율적인 데이터 활용을 돕는 웹 서비스' },
        ],
        skillsLan: [
            { name: 'React', percent: 90, icon: 'fa-brands fa-react' },
            { name: 'Vue3', percent: 70, icon: 'fa-brands fa-vuejs' },
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
            { name: 'Django', percent: 40, icon: 'fa-brands fa-python' },
        ],
        skillsTool: [
            { name: 'jQuery', percent: 55, icon: 'fa-brands fa-square-js' },
            { name: 'Redux', percent: 65, icon: 'fa-brands fa-js' },
            { name: 'IntelliJ', percent: 80, icon: 'fa-brands fa-java' },
            { name: 'VSC', percent: 70, icon: 'fa-solid fa-code' },
            { name: 'VS2022', percent: 70, icon: 'fa-brands fa-microsoft' },
            { name: 'Eclipse', percent: 60, icon: 'fa-brands fa-java' },
            { name: 'PyCharm', percent: 70, icon: 'fa-brands fa-python' },
            { name: 'Git', percent: 70, icon: 'fa-brands fa-github' },
            { name: 'Figma', percent: 85, icon: 'fa-brands fa-figma' },
            { name: 'AWS', percent: 40, icon: 'fa-brands fa-amazon' },
            { name: 'Vercel', percent: 50, icon: 'fa-brands fa-vuejs' },
            { name: 'StarUML', percent: 70, icon: 'fa-solid fa-star' },
            { name: 'Notion', percent: 60, icon: 'fa-solid fa-book' },
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