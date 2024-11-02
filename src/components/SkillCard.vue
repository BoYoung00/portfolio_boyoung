<template>
  <div class="skills-container">
    <div
        class="skill-card"
        v-for="(skill, index) in skills"
        :key="index"
        ref="progressRefs"
    >
      <p>{{ skill.name }}</p>
      <div class="progress-container">
        <div
            class="progress-bar"
            :ref="setProgressBar(index)"
            :style="{ width: '0%' }"
            :data-percent="skill.percent"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface Skill {
  name: string;
  percent: number;
}

export default defineComponent({
  name: 'SkillCard',
  props: {
    skills: {
      type: Array as () => Skill[],
      required: true,
    },
  },
  setup(props) {
    const progressRefs = ref<(HTMLDivElement | null)[]>([]);

    const setProgressBar = (index: number) => (el: HTMLDivElement | null) => {
      progressRefs.value[index] = el;
    };

    const animateProgressBars = () => {
      progressRefs.value.forEach((ref, index) => {
        if (ref) {
          setTimeout(() => {
            const percent = ref.dataset.percent;
            if (percent) {
              ref.style.width = `${percent}%`;
            }
          }, index * 400);
        }
      });
    };

    return { progressRefs, setProgressBar, animateProgressBars, props };
  },
});
</script>

<style scoped lang="scss">
.skills-container {
  width: 50%;
  display: flex;
  flex-direction: column;
}

.skill-card {
  width: 100%;
  padding: 1rem;
  background-color: #fff;
  transition: box-shadow 0.3s ease;
}

.progress-container {
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
}

.progress-bar {
  height: 10px;
  background-color: #3b82f6;
  transition: width 0.5s ease-in-out;
}
</style>
