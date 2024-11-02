<template>
  <div class="trail-container" @click="handleClick">
    <div
        class="moving-element"
        :style="{ top: `${position.y}px`, left: `${position.x}px` }"
    ></div>
    <transition-group name="fade" tag="div">
      <div
          v-for="(trail, index) in trails"
          :key="index"
          class="trail"
          :style="{
          top: `${trail.y}px`,
          left: `${trail.x}px`,
          opacity: trail.opacity,
          transform: `scale(${trail.scale})`,
        }"
      ></div>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import {Trail} from "@/type/moudules";

export default defineComponent({
  name: 'NaturalTrailEffect',
  setup() {
    const position = ref({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const trails = ref<Trail[]>([]);

    const handleClick = (event: MouseEvent) => {
      const targetX = event.clientX;
      const targetY = event.clientY;
      const steps = 20; // 자국 생성 단계를 설정
      const stepX = (targetX - position.value.x) / steps;
      const stepY = (targetY - position.value.y) / steps;

      // 요소의 최종 위치 업데이트
      position.value = { x: targetX, y: targetY };

      // 트레일 생성 및 애니메이션
      for (let i = 0; i <= steps; i++) {
        setTimeout(() => {
          const newX = position.value.x - stepX * (steps - i); // 올바른 위치 계산
          const newY = position.value.y - stepY * (steps - i); // 올바른 위치 계산
          createTrail(newX, newY); // 트레일 생성 시 새로운 좌표 전달
        }, i * 50); // 50ms마다 위치 업데이트
      }
    };

    const createTrail = (x: number, y: number) => {
      trails.value.push({ x, y, opacity: 1, scale: 1 });

      // 일정 시간 후 트레일의 불투명도를 줄이고 크기를 축소
      setTimeout(() => {
        const lastTrail = trails.value[trails.value.length - 1];
        if (lastTrail) {
          lastTrail.opacity = 0;
          lastTrail.scale = 0.5; // 크기를 줄임
        }
      }, 0);

      // 트레일 제거
      setTimeout(() => {
        trails.value.shift();
      }, 1000);
    };

    return {
      position,
      trails,
      handleClick,
    };
  },
});
</script>

<style scoped lang="scss">
.trail-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  cursor: pointer;
}

.moving-element {
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: blue;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: top 0.5s, left 0.5s;
}

.trail {
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: rgba(0, 0, 255, 0.5);
  border-radius: 50%;
  transition: opacity 1s, transform 1s;
}
</style>
