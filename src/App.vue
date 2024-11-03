<template>
  <div class="app">
    <FirstPage />
    <section ref="skillsSection" class="skillsSection animated-section">
      <h2 class="contentsTitle">기술 스택</h2>
      <div class="skills-list">
        <p>언어 / 프레임워크</p>
        <SkillCard ref="skillsLanCardRef" :skills="skillsLan" />
      </div>
      <div class="skills-list">
        <p>개발 도구 / 라이브러리</p>
        <SkillCard ref="skillsToolCardRef" :skills="skillsTool" />
      </div>
    </section>
    <section ref="projectsSection" class="projectsSection animated-section">
      <h2 class="contentsTitle">프로젝트</h2>
      <div class="project-list">
        <ProjectCard
            v-for="(project, index) in projects"
            :id="project.id"
            :title="project.title"
            :description="project.description"
            :key="index"
            @open-modal="openModal"
        />
      </div>
    </section>
    <Footer />

    <CardModal
        v-if="isModalOpen"
        :content="modalContent"
        @close="isModalOpen = false"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import FirstPage from "./components/FirstPage.vue";
import ProjectCard from './components/ProjectCard.vue';
import SkillCard from './components/SkillCard.vue';
import Footer from './components/MainFooter.vue';
import CardModal from './components/CardModal.vue';
import {Project} from "@/type/moudules";

export default defineComponent({
  name: 'App',
  components: {
    FirstPage,
    ProjectCard,
    SkillCard,
    Footer,
    CardModal,
  },
  setup() {
    // 기존 상태 및 참조들
    const skillsSection = ref(null);
    const projectsSection = ref(null);
    const contactSection = ref(null);
    const skillsLanCardRef = ref<InstanceType<typeof SkillCard> | null>(null);
    const skillsToolCardRef = ref<InstanceType<typeof SkillCard> | null>(null);

    const store = useStore();

    const projects = computed(() => store.state.projects);
    const skillsLan = computed(() => store.state.skillsLan);
    const skillsTool = computed(() => store.state.skillsTool);

    // 모달 상태 및 내용 관리
    const isModalOpen = ref(false);
    const modalContent = ref({ title: '', description: '' });

    // 모달 열기 메서드
    const openModal = (content: Project) => {
      modalContent.value = content;
      isModalOpen.value = true;
    };

    // 모달 닫기 메서드
    const closeModal = () => {
      isModalOpen.value = false;
    };

    // onMounted 내용 그대로
    onMounted(() => {
      const sections = [skillsSection.value, projectsSection.value, contactSection.value];
      const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                if (entry.target === skillsSection.value) {
                  if (skillsLanCardRef.value) {
                    skillsLanCardRef.value.animateProgressBars();
                  }
                  if (skillsToolCardRef.value) {
                    skillsToolCardRef.value.animateProgressBars();
                  }
                }
              }
            });
          },
          { threshold: 0.2 }
      );

      sections.forEach((section) => {
        if (section) {
          observer.observe(section);
        }
      });
    });

    return {
      skillsSection,
      projectsSection,
      contactSection,
      skillsLan,
      skillsTool,
      projects,
      skillsLanCardRef,
      skillsToolCardRef,
      isModalOpen,
      modalContent,
      openModal,
      closeModal,
    };
  },
});
</script>

<style scoped lang="scss">
.app {
  margin: 0; padding: 0;
  width: 100%; height: 100%;
  caret-color: transparent;

  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
}

.animated-section {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;

  padding: 4rem 2rem;
  color: #333;
}

.animated-section.visible {
  opacity: 1;
  transform: translateY(0);
}

.contentsTitle {
  position: relative;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
}

.introSection {
  height: 100vh;
  background-color: #f7f9fc;

  h1 {
    font-size: 2rem;
    font-weight: 700;
    margin: 0.5rem 0;
    line-height: 1.2;
  }
}

.skillsSection {
  background-color: #f5f7fb;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr 1fr;

  h2 {
    grid-column: 1 / -1;
  }

  .skills-list {
    display: flex;
    align-items: center;
    flex-direction: column;


    & > p {
      width: 60%;
      text-align: left;
      white-space: nowrap;
      //min-width: 12rem;
    }
  }
}

.projectsSection {
  background-color: white;
  padding-bottom: 6rem;

  .project-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
}
</style>
