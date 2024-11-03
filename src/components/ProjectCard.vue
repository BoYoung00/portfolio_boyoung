<template>
  <div
      class="project-card"
      @click="openModal"
  >
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProjectCard',
  props: ['title', 'description', 'id'],
  emits: ['open-modal'],
  methods: {
    openModal() {
      this.$emit('open-modal', { id: this.id, title: this.title, description: this.description });
    },
  },
});
</script>

<style scoped lang="scss">
  .project-card {
    width: 50%;
    padding: 2rem;
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: left;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    border: 1px solid #dadae1;

    & > h3 {
      color: #3b81f5;
      margin-bottom: 0.5rem;
      font-weight: bold;
    }

    p {
      color: #666;
      font-size: 0.9rem;
    }

    &:hover {
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    }
  }
</style>
