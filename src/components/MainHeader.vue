<template>
  <header class="header">
    <nav>
      <a href="#introSection">소개</a>
      <a href="#projectsSection">프로젝트</a>
      <a href="#skillsSection">기술 스택</a>
      <a href="#contactSection">연락처</a>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainHeader'
})
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  width: 100%;
  background: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
  z-index: 2;

  nav a {
    color: #fff;
    margin: 0 1rem;
    text-decoration: none;
  }
}
</style>
