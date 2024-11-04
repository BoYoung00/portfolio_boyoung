import { createStore } from 'vuex';
import {Project, Skill, State} from "@/type/moudules";

export default createStore<State>({
    state: {
        projects: [
            { id: 1, title: 'D-SIM', description: '데이터베이스 관리와 백엔드 개발을 간소화하고, 직관적인 UI/UX와 다양한 데이터 활용 기능을 제공하는 웹 서비스', tags: ['팀 프로젝트', '프론트 엔드'] },
            { id: 2, title: 'Data Source', description: '팀 협업을 위한 데이터베이스 관리 및 버전 제어 기능을 제공하며, 자동화된 템플릿 코드 지원을 통해 효율적인 데이터 활용을 돕는 웹 서비스', tags: ['팀 프로젝트', '풀스택'] },
            { id: 3, title: 'PortfolioBY', description: '나를 소개하는 포트폴리오 웹 사이트', tags: ['개인 프로젝트', '프론트 엔드'] },
        ],
        skillsLan: [
            { name: 'React', percent: 90, icon: 'fa-brands fa-react' },
            { name: 'HTML5', percent: 90, icon: 'fa-brands fa-html5' },
            { name: 'CSS3', percent: 90, icon: 'fa-brands fa-css3' },
            { name: 'SCSS', percent: 90, icon: 'fa-brands fa-sass' },
            { name: 'TypeScript', percent: 75, icon: 'fa-brands fa-js-square' },
            { name: 'JavaScript', percent: 75, icon: 'fa-brands fa-js' },
            { name: 'Vue3', percent: 75, icon: 'fa-brands fa-vuejs' },
            { name: 'Spring', percent: 70, icon: 'fa-brands fa-java' },
            { name: 'MySQL', percent: 70, icon: 'fa-solid fa-database' },
            { name: 'JSP', percent: 70, icon: 'fa-brands fa-java' },
            { name: 'Kotlin', percent: 65, icon: 'fa-brands fa-font-awesome' },
            { name: 'JAVA', percent: 65, icon: 'fa-brands fa-java' },
            { name: 'Python', percent: 60, icon: 'fa-brands fa-python' },
            { name: 'C++/C#', percent: 45, icon: 'fa-solid fa-c' },
            { name: 'Android', percent: 40, icon: 'fa-brands fa-android' },
            { name: '.Net', percent: 40, icon: 'fa-brands fa-microsoft' },
            { name: 'Django', percent: 30, icon: 'fa-brands fa-python' },
        ],
        skillsTool: [
            { name: 'Figma', percent: 90, icon: 'fa-brands fa-figma' },
            { name: 'IntelliJ', percent: 90, icon: 'fa-brands fa-java' },
            { name: 'VSC', percent: 70, icon: 'fa-solid fa-code' },
            { name: 'VS2022', percent: 70, icon: 'fa-brands fa-microsoft' },
            { name: 'Git', percent: 70, icon: 'fa-brands fa-github' },
            { name: 'StarUML', percent: 70, icon: 'fa-solid fa-star' },
            { name: 'PyCharm', percent: 65, icon: 'fa-brands fa-python' },
            { name: 'Notion', percent: 60, icon: 'fa-solid fa-book' },
            { name: 'Redux', percent: 60, icon: 'fa-brands fa-js' },
            { name: 'Eclipse', percent: 50, icon: 'fa-brands fa-java' },
            { name: 'jQuery', percent: 50, icon: 'fa-brands fa-square-js' },
            { name: 'Vercel', percent: 30, icon: 'fa-brands fa-vuejs' },
            { name: 'AWS', percent: 30, icon: 'fa-brands fa-amazon' },
        ]
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
