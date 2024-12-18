<template>
  <div class="skills-container">
    <div
        class="skill-card"
        v-for="(skill, index) in skills"
        :key="index"
        ref="progressRefs"
    >
      <p class="skill-name">
        <font-awesome-icon :icon="skill.icon" />
        &nbsp;{{ skill.name }}
      </p>
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
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {Skill} from "@/type/moudules";

export default defineComponent({
  name: 'SkillCard',
  components: {
    FontAwesomeIcon,
  },
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
              const percentNum = Number(percent)
              ref.style.width = `${percent}%`;

              // percent의 값에 따라 색상 조정
              if (percentNum >= 80) {
                ref.style.backgroundColor = '#16a34a';
              } else if (percentNum >= 60) {
                ref.style.backgroundColor = '#3b82f6';
              } else if (percentNum >= 40) {
                ref.style.backgroundColor = '#facc15';
              } else if (percentNum >= 20) {
                ref.style.backgroundColor = '#f97316';
              } else {
                ref.style.backgroundColor = '#ef4444';
              }
            }
          }, index * 200);
        }
      });
    };

    return { progressRefs, setProgressBar, animateProgressBars, props };
  },
});
</script>

<style scoped lang="scss">
.skills-container {
  width: 60%;
  min-width: 11rem;
  display: flex;
  flex-direction: column;
  white-space: nowrap;
}

.skill-card {
  width: 100%;
  transition: box-shadow 0.3s ease;
  font-weight: bold;
  display: flex;
  align-items: center;
}

.skill-name {
  width: 9rem;
  color: #334b7e;
  font-size: 1rem;
  text-overflow: ellipsis;
  overflow: hidden;
}

.progress-container {
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
  margin-left: 10px;
}

.progress-bar {
  height: 10px;
  background-color: #3b82f6;
  transition: width 0.5s ease-in-out;
}
</style>
