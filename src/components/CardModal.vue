<template>
  <div class="modal-overlay" @click.self="close">
    <div class="modal-content">
      <button class="close-button" @click="close">X</button>
      <div class="scrollable-content">
        <component :is="currentComponent"></component>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, defineComponent, ref, watch} from 'vue';
import DSim from './projects/DSim.vue';
import DataSource from './projects/DataSource.vue';
import PortfolioBY from './projects/PortfolioBY.vue';

export default defineComponent({
  name: 'CardModal',
  props: ['content'],
  emits: ['close'],
  setup(props, { emit }) {
    const currentComponent = ref<Component | null>(null);

    watch(
        () => props.content.id,
        (newId) => {
          if (newId === 1) {
            currentComponent.value = DSim;
          } else if (newId === 2) {
            currentComponent.value = DataSource;
          } else {
            currentComponent.value = PortfolioBY;
          }
        },
        { immediate: true } // 컴포넌트가 마운트될 때도 실행
    );

    const close = () => {
      emit('close');
    };

    return {
      currentComponent,
      close,
    };
  },
});
</script>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
}

.modal-content {
  position: relative;
  width: 80%;
  height: 80%;
  max-height: 80vh;
  background-color: #ffffff;
  border-radius: 10px;
  overflow-y: auto;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.scrollable-content {
  overflow-y: auto;
}

.close-button {
  background: none;
  border: none;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
</style>
