<template>
  <div class="container">
    <h1>D-SIM</h1>

    <h3>1. 프로젝트 주제</h3>
    <ul>
      <li>
        이 프로젝트는 졸업 작품으로 수행한 두 번째 프로젝트입니다. 첫 번째 프로젝트의 문제점을 개선하고 발전 시켰습니다.
      </li>
      <li>
        D-SIM이란 DATA와 SIMPLE의 합성어로, 데이터베이스 구축부터 백엔드 개발 과정을 간단하게 처리하고, 다양한 데이터 활용 기능을 제공하기 위해 제작하게 되었습니다.
      </li>
    </ul>

    <h3>2. 주요 기능</h3>
    <ul>
      <li>데이터베이스, 테이블 생성 및 관리 기능</li>
      <li>데이터베이스 활용 기능 (외부 데이터베이스 연동, 엑셀 데이터 사용, DTO 및 SQL문 자동 생성, REST API URL 제공 등)</li>
      <li>데이터베이스 버전 관리 기능 (이력 남기기, 체크 아웃, 리셋 기능 등)</li>
    </ul>

    <h3>3. 기간</h3>
    <ul>
      <li>2024년 07월~2024년 11월</li>
    </ul>

    <h3>4. 팀 구성 및 역할</h3>
    <ul>
      <li><strong>팀 구성</strong> : 4인 (디자인 및 프론트 엔드 1명, 배포 및 백엔드 1명, 디자인 및 코딩 보조 2명)</li>
      <li><strong>역할</strong> : 팀 리더, 디자인 및 프론트 엔드</li>
    </ul>

    <h3>5. 사용 기술 스택</h3>
    <ul>
      <li><strong>운영 체제</strong> : Windows11, MacOS</li>
      <li><strong>개발 도구</strong> : IntelliJ IDEA, Spring Boot, MySQL</li>
      <li><strong>개발 언어</strong> : Kotlin, Coroutine, TypeScript, React, SCSS</li>
      <li><strong>배포 및 서비스 환경</strong> : GCP</li>
    </ul>

    <h3>6. 작업 기여도</h3>

    <aside class="contribution">
      사용자 친화적이지 못했던 버전1의 UI/UX를 개선하였습니다.
    </aside>
    <ul>
      <li>버전 1의 UI는 사용자가 기능을 직관적으로 이해하기 어려웠으며, 유사한 기능을 여러 페이지에서 사용해야 하는 불편함이 있었습니다. 이를 개선하기 위해 MS 오피스 UI에서 영감을 받아 여러 기능을 한 화면에서 사용할 수 있도록 <strong>UI를 개선</strong>하였습니다.</li>
      <li><strong>버전1 UI 프로토타입</strong> : 데이터베이스 생성부터 테이블 활용까지의 과정</li>
      <div class="imgBox">
        <img :src="require('@/assets/images/dataSource.png')" alt="DataSource" />
      </div>
      <li><strong>버전2 UX</strong> : 버전1의 잦은 화면 전환 문제를 개선한 버전2의 UI</li>
      <img class="dSimImage" :src="require('@/assets/images/dSim.png')" alt="DataSource" />
      <li>그 외에도 피그마를 활용해 팀원들과 원활하게 소통하며 UX 분석을 진행하였습니다.</li>
      <li><strong>피그마 링크</strong> : <a href="https://www.figma.com/design/HiQLcOQqoFMVGuJVzhZVtu/%EC%B4%88%EC%95%88%EC%9E%90?node-id=0-1&node-type=canvas&t=N1lXmfxddxWVJPAB-0" target="_blank">D-SIM Figma</a></li>
    </ul>

    <aside class="contribution">
        프론트엔드 개발을 담당하며, 프로젝트 생성부터 관리까지 모두 직접 수행하였습니다.
    </aside>
    <ul>
      <li><strong>React, TypeScript</strong>를 사용하여 프로젝트를 생성하고, 유지 보수하기 좋은 <strong>폴더 구조를 설계</strong>하였습니다.</li>
      <li><strong>SCSS 모듈</strong>을 사용해 각 컴포넌트에 독립적인 스타일을 적용하였으며, `App.module.scss` 파일을 생성하여 색상, 폰트, 자주 사용하는 스타일, 그리고 공통 스타일을 정의하였습니다. 이를 통해 모든 컴포넌트에서 해당 스타일을 상속 받아 코드의 <strong>재사용성을 높이고</strong>, 유지 보수가 쉽도록 하였습니다.</li>
      <li>`.env` 파일을 사용하여 서버와의 <strong>통신 URL을 관리</strong>하였습니다.</li>
      <li><strong>Axios</strong> 인스턴스를 생성하여 기본 URL, 인증 헤더, 및 응답 타입을 설정하고, 요청 인터셉터를 추가하여 인증 요청을 자동화하였습니다.</li>
      <li><strong>Context</strong>를 사용하여 데이터 전역 상태 관리를 하였습니다. </li>
      <li>훅과 컴포넌트를 분리하는 리팩토링을 진행하여 <strong>코드의 가독성</strong>을 높였습니다.</li>
    </ul>

    <aside class="contribution">
      백엔드 팀원과 기술 논의를 진행하고, 다양한 라이브러리를 활용하여 개발하였습니다.
    </aside>
    <ul>
      <li>웹 서비스의 속도 최적화를 위해 통신을 최소화하는 함수와 속성, 메모리 용량 문제로 인한 파일 단위 데이터 관리, SSR 사용 등에 대해 <strong>논의하고 개발</strong>을 진행하였습니다.</li>
      <li>데이터베이스 설계 시 사용되는 ERD 모델을 시각적으로 표현하기 위해 <strong>GoJS 라이브러리</strong>를 활용하여 엔티티 생성과 마우스 드래그를 통한 관계 연결 기능을 구현하였습니다.</li>
    </ul>

    <aside class="contribution">
        이미지 및 폰트 최적화 진행
    </aside>
    <ul>
      <li><strong>Lighthouse</strong>를 사용하여 웹 페이지의 속도를 평가하고, 이미지 크기를 줄이며, 폰트를 CDN으로 교체하여 최적화를 진행하였습니다.</li>
    </ul>

    <aside class="contribution">
        졸업 작품회 발표 진행
    </aside>
    <ul>
      <li>PPT와 <strong>대본을 작성</strong>하였고, 시스템 개발에 대해 잘 모르는 사람도 이해할 수 있도록 내용을 쉽게 풀어 설명했습니다.</li>
      <li><strong>시연자</strong>로서 PPT를 사용해 발표하고 시스템 시연을 진행하였습니다.</li>
    </ul>

    <h3>7. 문제와 해결 과정</h3>

    <aside class="contribution">
        백엔드 CORS 설정 문제 해결 과정
    </aside>
    <ul>
      <li><strong>문제</strong> : 사용자가 서버에서 제공되는 파일을 다운로드 하고자 할 때, CORS 설정으로 인해 접근이 허용되지 않아 오류가 발생했습니다.</li>
      <li><strong>해결</strong> : 파일 다운로드 헤더를 추가하였습니다.</li>
    </ul>

    <aside class="contribution">
        DBMS CONNECT 기능의 선택 박스 초기 렌더링 문제 해결 과정
    </aside>
    <ul>
      <li><strong>문제</strong> : 초기 렌더링 시 선택 박스에 요소가 선택된 것처럼 보였으나, 실제 서버에 데이터를 전송할 때 `null`이 보내지는 문제가 있었습니다.</li>
      <li><strong>해결</strong> : `useEffect`를 사용하여 컴포넌트가 초기화될 때 선택 박스의 값을 설정함으로써 문제를 해결하였습니다.</li>
    </ul>

    <h3>8. 성과 및 보완 사항</h3>
    <ul>
      <li><strong>성과</strong> : 버전1 보다 UX가 직관적이고 깔끔하며, 다양한 활용 기능 덕분에 사용자들에게 유용하다는 긍정적인 평가를 받았습니다.</li>
      <li><strong>보완 사항</strong> : 데이터베이스 설계를 위한 ERD 모드의 연관 관계 기능을 개선하고, 디버깅을 진행해야 합니다.</li>
    </ul>

    <h3>9. 시연 동영상</h3>
    <video class="video" controls muted>
      <source :src="require('@/assets/video/dSim.mp4')" type="video/mp4" >
    </video>
<!--    <ul>-->
<!--      <li>졸업 작품회 발표를 마친 후 업로드 예정</li>-->
<!--    </ul>-->

    <h3>10. 깃 주소</h3>
    <ul>
      <li><a href="https://github.com/BoYoung00/nds_client" target="_blank">깃허브 링크</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DSim"
}
</script>

<style lang="scss" src="./projects.scss" />

<style lang="scss">
.dSimImage {
  border: 1px solid #c7c7c7;
  width: 30vmax;

}
</style>