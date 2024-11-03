<template>
  <footer class="footer">
    <p>이메일: qhdud20@naver.com</p>
    <p>GitHub: <a href="https://github.com/BoYoung00" target="_blank">BoYoung00</a></p>
    <p>블로그: <a href="https://qhdud20.tistory.com/" target="_blank">studying coding</a></p>
    <p>© 2024 KIM-BoYoung.</p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainFooter'
})
</script>

<style scoped lang="scss">
.footer {
  background: #333;
  color: #fff;
  padding: 3rem 3rem 2rem 3rem ;
  text-align: center;
  border-radius: 50% 50% 0 0;

  & a { color: #3b82f6; }
}
</style>
