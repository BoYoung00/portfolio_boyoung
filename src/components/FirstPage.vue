<template>
  <div class="penguin-world" @mousemove="handleMouseMove" @click="handleClick">
    <div class="welcome-message">
      <h5 v-for="(text, index) in welcomeMessages" :key="index" :class="['welcome-text', { 'visible': currentTextIndex >= index }]">
        {{ text }}
      </h5>
    </div>
    <div class="down-arrow">↓</div>
    <div
        :class="['penguin-icon', isMoving ? 'moving' : '', isFlipped ? 'flipped' : '']"
        :style="{ top: `${position.y}px`, left: `${position.x - 50}px` }"
    />
    <div v-if="showClickText" class="click-text" :style="{ top: `${mousePosition.y - 15}px`, left: `${mousePosition.x - 20}px` }">Click!</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'FirstPage',
  setup() {
    const position = ref({ x: window.innerWidth / 2, y: window.innerHeight / 2 + 100 });
    const mousePosition = ref({ x: 0, y: 0 });
    const isMoving = ref(false);
    const isFlipped = ref(false);
    const showClickText = ref(true);
    const welcomeMessages = [
      '끊임없이 도전하며 성장하는',
      '프론트 엔드 개발자가 되고 싶은',
      '김보영입니다.'
    ];
    const currentTextIndex = ref(0);

    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.value = { x: event.clientX, y: event.clientY };
    };

    const handleClick = (event: MouseEvent) => {
      if (!isMoving.value) {
        isMoving.value = true;
        showClickText.value = false;

        const targetX = event.clientX;
        const targetY = event.clientY;

        isFlipped.value = targetX < position.value.x;
        position.value = { x: targetX, y: targetY};

        setTimeout(() => {
          isMoving.value = false;
        }, 3000);
      }
    };

    onMounted(() => {
      setTimeout(() => {
        currentTextIndex.value = 1;
        setTimeout(() => {
          currentTextIndex.value = 2;
          setTimeout(() => {
            currentTextIndex.value = 3;
          }, 1000);
        }, 1000);
      }, 1000);
    });

    return {
      position,
      mousePosition,
      isMoving,
      isFlipped,
      showClickText,
      welcomeMessages,
      currentTextIndex,
      handleMouseMove,
      handleClick,
    };
  },
});
</script>

<style scoped lang="scss">
.penguin-world {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: white;
  overflow: hidden;
  cursor: pointer;
}

.welcome-message {
  width: 100%;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -100%);
  font-size: 2rem;
  text-align: center;
  color: #333;
  z-index: 2;
}

.welcome-text {
  opacity: 0;
  transform: translateX(-20px);
  transition: opacity 1s ease, transform 1s ease;
}

.welcome-text.visible {
  opacity: 1;
  transform: translateX(0);
}

.down-arrow {
  position: absolute;
  bottom: 5%;
  left: 50%;
  font-size: 2rem;
  color: #333;
  animation: bounce 3s infinite;
  z-index: 2;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

.penguin-icon {
  position: absolute;
  width: 60px;
  height: 60px;
  background-image: url('@/assets/images/penguin_stand.gif');
  background-size: cover;
  transition: top 3s ease, left 3.5s ease;

  &.moving {
    background-image: url('@/assets/images/penguin_move.gif');
  }

  &.flipped {
    transform: scaleX(-1);
  }
}

.click-text {
  position: fixed;
  font-weight: bold;
  color: #f66368;
  transform: translate(-50%, -50%);
}

// 트레일 효과 디자인
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
