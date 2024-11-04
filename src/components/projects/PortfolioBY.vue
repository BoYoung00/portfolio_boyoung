<template>
  <div class="container">
    <h1>PortfolioBY</h1>

    <h3>1. 프로젝트 주제</h3>
    <p>
      나를 소개하는 프론트엔드 포트폴리오 웹 페이지 제작
    </p>

    <h3>2. 기간</h3>
    <p>2024년 11월 (약 2일간)</p>

    <h3>3. 사용 기술 스택</h3>
    <ul>
      <li><strong>운영 체제</strong> : Windows11</li>
      <li><strong>개발 도구</strong> : IntelliJ IDEA, Git</li>
      <li><strong>개발 언어</strong> : Vue.js, Type Script, SCSS</li>
      <li><strong>배포 환경</strong> : Vercel</li>
    </ul>

    <h3>4. 작업 내용</h3>
    <ul>
      <li><strong>움직이는 펭귄</strong> : <strong>MouseEvent</strong>를 통해 펭귄 아이콘이 클릭한 위치로 이동하는 기능을 넣었습니다. </li>
      <li><strong>스크롤 애니메이션</strong> : <strong>IntersectionObserver</strong>을 통해 스크롤 애니메이션을 넣었습니다. </li>
      <li><strong>스킬 레벨바 애니메이션</strong> : ref로 하위 컴포넌트의 애니메이션을 제어하였습니다. </li>
<!--      <li><strong>최적화 작업</strong> : PWA 적용으로 정적 자원을 캐싱하여 성능을 개선했습니다. </li>-->
    </ul>

    <h3>5. 문제와 해결 과정</h3>
    <aside class="contribution">
      Vercel 배포 오류
    </aside>
    <ul>
      <li><strong>문제</strong> : 배포 과정에서 package.json 파일을 찾을 수 없다는 오류가 발생했습니다.</li>
      <li><strong>해결</strong> : 파일을 깃에 업로드하지 않은 것을 깨닫고 커밋했습니다.</li>
    </ul>

    <h3>6. 개발 후기 및 보완 사항</h3>
    <ul>
      <li><strong>개발 후기</strong> : Veu.js에 대해 공부할 수 있었고, Vercel를 사용해볼 수 있는 좋은 기회였습니다. </li>
      <li><strong>보완 사항</strong> : UI 개선 및 성능 최적화를 진행해야 합니다.</li>
    </ul>

    <h3>7. 깃 주소</h3>
    <ul>
      <li><a href="https://github.com/BoYoung00/portfolio_boyoung" target="_blank">깃허브 링크</a></li>
    </ul>

    <h3>8. 링크</h3>
    <ul>
      <li><a href="https://portfolio-boyoung.vercel.app/" target="_blank">사이트 접속 링크</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PortfolioBY"
}
</script>

<style lang="scss" src="./projects.scss" />
