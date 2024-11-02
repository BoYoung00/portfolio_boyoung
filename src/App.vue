<template>
  <div>
    <FirstPage />
    <section ref="skillsSection" class="skillsSection animated-section">
      <h2 class="contentsTitle">기술 스택</h2>
      <div class="skills-list">
        <SkillCard ref="skillsLanCardRef" :skills="skillsLan" />
      </div>
      <div class="skills-list">
        <SkillCard ref="skillsToolCardRef" :skills="skillsTool" />
      </div>
    </section>
    <section ref="projectsSection" class="projectsSection animated-section">
      <h2 class="contentsTitle">프로젝트</h2>
      <div v-for="(project, index) in projects" class="project-list" :key="index">
        <ProjectCard
            :title="project.title"
            :description="project.description"
        />
      </div>
    </section>
    <section ref="contactSection" class="contactSection animated-section">
      <h2 class="contentsTitle">연락처</h2>
      <p>이메일: example@example.com</p>
      <p>GitHub: <a href="https://github.com/username">username</a></p>
    </section>
    <Footer />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import FirstPage from "./components/FirstPage.vue";
import ProjectCard from './components/ProjectCard.vue';
import SkillCard from './components/SkillCard.vue';
import Footer from './components/MainFooter.vue';

export default defineComponent({
  name: 'App',
  components: {
    FirstPage,
    ProjectCard,
    SkillCard,
    Footer,
  },
  setup() {
    const skillsSection = ref(null);
    const projectsSection = ref(null);
    const contactSection = ref(null);
    const skillsLanCardRef = ref<InstanceType<typeof SkillCard> | null>(null);
    const skillsToolCardRef = ref<InstanceType<typeof SkillCard> | null>(null);

    const store = useStore();

    const projects = computed(() => store.state.projects);
    const skillsLan = computed(() => store.state.skillsLan);
    const skillsTool = computed(() => store.state.skillsTool);

    onMounted(() => {
      const sections = [skillsSection.value, projectsSection.value, contactSection.value];

      const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                if (entry.target === skillsSection.value) {
                  if (skillsLanCardRef.value) {
                    skillsLanCardRef.value.animateProgressBars(); // 첫 번째 SkillCard 메서드 호출
                  }
                  if (skillsToolCardRef.value) {
                    skillsToolCardRef.value.animateProgressBars(); // 두 번째 SkillCard 메서드 호출
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
    }); // onMounted

    return { skillsSection, projectsSection, contactSection, skillsLan, skillsTool, projects, skillsLanCardRef, skillsToolCardRef };
  },
});
</script>

<style scoped lang="scss">
.animated-section {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
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
  text-align: center;
  background-color: #f7f9fc;
  color: #333;

  h1 {
    font-size: 2rem;
    font-weight: 700;
    margin: 0.5rem 0;
    line-height: 1.2;
  }
}

.skillsSection {
  padding: 4rem 2rem;
  background-color: #f5f7fb;
  color: #333;

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 2rem;
    text-align: center;
  }

  .skills-list {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
  }
}

.projectsSection {
  padding: 4rem 2rem;
  background-color: #f7f9fc;
  color: #333;

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 2rem;
    text-align: center;
  }

  .project-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
}

.contactSection {
  padding: 4rem 2rem;
  background-color: #fff;
  color: #333;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.2rem;
    margin: 0.5rem 0;
  }

  a {
    color: #007acc;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
