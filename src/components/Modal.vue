<template>
  <div class="modal-overlay" @click.self="close">
    <div class="modal-content">
      <button class="close-button" @click="close">X</button>
      <h2>{{ content.title }}</h2>
      <p>{{ content.description }}</p>
      <div class="scrollable-content">
        <!-- Detailed project information here -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardModal',
  props: ['content'],
  emits: ['close'],
  methods: {
    close() {
      this.$emit('close');
    },
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
}

.modal-content {
  position: relative;
  width: 80%;
  max-width: 600px;
  max-height: 80vh;
  background-color: #ffffff;
  border-radius: 10px;
  overflow-y: auto;
  padding: 1rem;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
}

.scrollable-content {
  overflow-y: auto;
  max-height: 60vh;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
</style>
