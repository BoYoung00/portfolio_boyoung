<template>
  <header :class="['header', { 'header--scrolled': isScrolled }]">
    <nav class="nav">
      <ul>
        <li @click="scrollToSection(skillsSection)">Skills</li>
        <li @click="scrollToSection(projectsSection)">Projects</li>
        <li @click="scrollToSection(contactSection)">Contact</li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'MainHeader',
  props: {
    skillsSection: Object,
    projectsSection: Object,
    contactSection: Object,
  },
  setup() {
    const isScrolled = ref(false);

    const handleScroll = () => {
      isScrolled.value = window.scrollY > window.innerHeight - 100;
    };

    const scrollToSection = (sectionRef: any) => {
      sectionRef?.scrollIntoView({ behavior: 'smooth' });
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    return {
      isScrolled,
      scrollToSection,
    };
  },
});
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  width: 100%;
  transition: background-color 0.3s ease;
  z-index: 3;

  &--scrolled {
    background: #333333;
    color: white;
    box-shadow: 1px 0 5px rgb(0, 0, 0.2);
  }

  .nav ul {
    display: flex;
    gap: 2rem;
    list-style: none;
  }

  li {
    //font-weight: bold;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #0073e6;
    }
  }
}
</style>
