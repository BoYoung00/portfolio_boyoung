<template>
  <footer :class="$style.footer">
    <p>© 2024 KIM-BoYoung.</p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainFooter'
})
</script>

<style module lang="scss">
.footer {
  background: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
}
</style>
