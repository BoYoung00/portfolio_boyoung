<template>
  <div class="container">
    <h1>Data Source</h1>

    <h3>1. 프로젝트 주제</h3>
    <p>
      졸업 작품 프로젝트로 수행한 첫번째 버전으로, 데이터베이스를 협업하여 관리할 수 있도록 하고, 템플릿 코드를 제공하여 데이터를 자동으로 사용할 수 있는 기능 등을 제공하기 위해 제작되었습니다.
    </p>

    <h3>2. 주요 기능</h3>
    <ul>
      <li>프로젝트 생성 및 관리 기능</li>
      <li>팀원 관리 기능</li>
      <li>데이터베이스, 테이블 생성 및 관리 기능</li>
      <li>템플릿 기능</li>
      <li>데이터베이스 버전 관리 (커밋, 체크 아웃, 리셋, 병합)</li>
    </ul>

    <h3>3. 기간</h3>
    <p>2024년 01월~2024년 06월</p>

    <h3>4. 팀 구성 및 역할</h3>
    <ul>
      <li><strong>팀 구성</strong> : 4인 (백엔드 2명, 프론트 엔드 2명)</li>
      <li><strong>역할</strong> : 팀 리더 및 백엔드 + 디자인, 프론트 엔드 보조</li>
    </ul>

    <h3>5. 사용 기술 스택</h3>
    <ul>
      <li><strong>운영 체제</strong> : Windows11, MacOS</li>
      <li><strong>개발 도구</strong> : IntelliJ IDEA, Spring Boot, MySQL</li>
      <li><strong>개발 언어</strong> : Kotlin, React, JavaScript, CSS</li>
    </ul>

    <h3>6. 작업 기여도</h3>

    <aside class="contribution">
      백엔드를 맡아 데이터베이스 버전 관리 기능을 만들었습니다.
    </aside>
    <ul>
      <li><strong>커밋 기능</strong> : 우리 서비스에서 생성한 데이터베이스를 MySQL에 그대로 복사하여 저장함으로써 추후 체크아웃 기능 등을 수행할 수 있도록 하였습니다. 이전 데이터와의 변경 사항을 필터링하여 비교 분석한 후, 가공된 데이터를 MySQL에 저장하였습니다.</li>
      <li><strong>체크 아웃 기능</strong> : 선택한 커밋의 데이터를 우리 서비스의 데이터베이스 작업 공간에 교체할 수 있도록 하였습니다.</li>
      <li><strong>리셋 기능</strong> : HARD 리셋을 사용하여 작업 공간의 상태를 변경하고, 이후 이력을 모두 삭제하도록 하였습니다.</li>
      <li><strong>병합 기능</strong> : 체크아웃된 분기와 선택한 분기를 병합하는 기능을 구현하였습니다. 각 분기의 데이터의 행, 속성, PK 무결성 등의 제약 사항을 고려하여 다양한 방면에서 제어하며, 충돌 발생 시 사용할 데이터를 선택할 수 있도록 하였습니다.</li>
    </ul>

    <aside class="contribution">
      UI 설계 및 개선
    </aside>
    <ul>
      <li>문제를 인식하고 화면에 구성되어야 할 요소를 파악한 후, 팀원들과 소통하여 UI를 설계하고 개선하였습니다.</li>
    </ul>

    <aside class="contribution">
      프론트 엔드 통신 코드 작성 및 리팩토링
    </aside>
    <ul>
      <li>클라이언트 디자인 코드 작성이 완료되면, 백엔드와의 통신 코드를 작성하였습니다. 프론트 엔드 담당 팀원에게 코드 피드백을 제공하고, 그리드 및 개선 사항을 찾아 리팩토링과 코드 개선을 진행하였습니다.</li>
    </ul>

    <aside class="contribution">
      웹 서비스를 반응형으로 전환
    </aside>
    <ul>
      <li>클라이언트 코드를 직접 코딩하여 반응형 웹 사이트로 전환하였습니다.</li>
    </ul>

    <h3>7. 문제와 해결 과정</h3>

    <aside class="contribution">
      데이터베이스와 버전 관리에 대한 이해도
    </aside>
    <ul>
      <li><strong>문제</strong> : 버전 관리 기능을 제작하기 위해 데이터베이스의 제약 사항 및 버전 관리에 대한 지식이 미흡하다는 문제가 있었습니다.</li>
      <li><strong>해결</strong> : 깃과 데이터베이스 제약 사항에 대해 더욱 공부하고 이해도를 높여, 여러 가지 기능을 최대한 적용 시켰습니다.</li>
    </ul>

    <h3>8. 성과 및 보완 사항</h3>
    <ul>
      <li><strong>성과</strong> : 졸업 작품 발표 팀에 선정 되었습니다.</li>
      <li><strong>보완 사항</strong> : 코드의 가독성과 유지 보수성이 떨어지며, 데이터가 과도한 메모리를 차지하는 문제가 있습니다. 또한, 사용자 경험을 고려하지 않은 UI 디자인이 개선되어야 합니다. 이러한 문제점들을 해결하기 위해 프로젝트를 재구성하여 <strong>버전 2를 제작하기로 결정</strong>했습니다. (※ 프로젝트 D-SIM)</li>
    </ul>

    <h3>9. 시연 동영상</h3>
    <video class="video" controls>
      <source :src="require('@/assets/video/dataSource.mp4')" type="video/mp4" >
    </video>
  </div>
</template>

<script>
export default {
  name: "DataSource"
}
</script>

<style lang="scss" src="./projects.scss" />
