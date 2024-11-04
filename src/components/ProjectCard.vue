<template>
  <div
      class="project-card"
      @click="openModal"
  >
    <h3>{{ project.title }}</h3>
    <div class="tags">
      <span v-for="(tag, index) in project.tags" :key="index" class="tag">
        #{{ tag }}
      </span>
    </div>
    <p>{{ project.description }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Project } from '@/type/moudules';

export default defineComponent({
  name: 'ProjectCard',
  props: {
    project: {
      type: Object as PropType<Project>,
      required: true,
    },
  },
  emits: ['open-modal'],
  methods: {
    openModal() {
      this.$emit('open-modal', this.project);
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

  .tags {
    margin-bottom: .5rem;

    .tag {
      display: inline-block;
      margin: 0 .5rem .5rem 0;
      padding: .3rem .6rem;
      font-size: .8rem;
      color: #3b81f5;
      background-color: #e8f0ff;
      border-radius: 6px;
    }
  }

  p {
    color: #666;
    font-size: 0.9rem;
    margin: 0;
  }

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
}
</style>
