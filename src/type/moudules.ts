export interface Skill {
    name: string;
    percent: number;
    icon: string; // 아이콘 추가
}

export interface Project {
    id: number;
    title: string;
    description: string;
}

export interface State {
    projects: Project[];
    skillsLan: Skill[];
    skillsTool: Skill[];
}

export interface Trail {
    x: number;
    y: number;
    opacity: number;
    scale: number;
}