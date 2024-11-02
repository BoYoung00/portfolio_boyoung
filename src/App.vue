<template>
  <div>
    <section ref="introSection" class="introSection animated-section">
      <div>
        <h1>안녕하세요, 끊임없이 도전하며</h1>
        <h1>성장하는 프론트엔드 개발자가 되고 싶은</h1>
        <h1>김보영입니다.</h1>
      </div>
    </section>
    <section ref="skillsSection" class="skillsSection animated-section">
      <h2>기술 스택</h2>
      <div class="skills-list">
        <SkillCard ref="skillCardRef" :skills="skills" />
      </div>
    </section>
    <section ref="projectsSection" class="projectsSection animated-section">
      <h2>프로젝트</h2>
      <div v-for="(project, index) in projects" class="project-list" :key="index">
        <ProjectCard
            :title="project.title"
            :description="project.description"
        />
      </div>
    </section>
    <section ref="contactSection" class="contactSection animated-section">
      <h2>연락처</h2>
      <p>이메일: example@example.com</p>
      <p>GitHub: <a href="https://github.com/username">username</a></p>
    </section>
    <Footer />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import ProjectCard from './components/ProjectCard.vue';
import SkillCard from './components/SkillCard.vue';
import Footer from './components/MainFooter.vue';

export default defineComponent({
  name: 'App',
  components: {
    ProjectCard,
    SkillCard,
    Footer,
  },
  setup() {
    const introSection = ref(null);
    const skillsSection = ref(null);
    const projectsSection = ref(null);
    const contactSection = ref(null);
    const skillCardRef = ref<InstanceType<typeof SkillCard> | null>(null); // 타입 지정

    const store = useStore();

    const projects = computed(() => store.state.projects);
    const skills = computed(() => store.state.skills);

    onMounted(() => {
      const sections = [introSection.value, skillsSection.value, projectsSection.value, contactSection.value];

      const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                if (entry.target === skillsSection.value) {
                  if (skillCardRef.value) {
                    skillCardRef.value.animateProgressBars(); // 메서드 호출
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

    return { introSection, skillsSection, projectsSection, contactSection, skills, projects, skillCardRef };
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
  background-color: #fff;
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
