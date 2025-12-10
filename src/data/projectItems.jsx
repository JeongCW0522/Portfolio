import ProjectImage1 from "../../assets/project1.png";

export const projectItems = [
  {
    title: "나만의 인사이트를 저장하는 북마크 플랫폼",
    subTitle: "BookMark Platform",
    date: "2025.06 - 2025.08",
    people: "10명 (프론트엔드 개발)",
    image: ProjectImage1,
    keyFeatures: [
      "웹과 모바일을 분리하여 UI/UX 적용",
      "URL을 복사해오면 자동으로 썸네일과 제목 추출",
      "저장한 인사이트를 손쉽게 검색",
      "카테고리 & 태그별로 분류해 쉽게 관리",
      "카카오톡 나에게 보내기 알림 설정을 통해 리마인드",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Tanstack Query",
      "Jotai",
      "Framer Motion",
      "Zod + React Hook Form",
    ],
    motivation:
      "나중에 봐야겠다 생각하고 저장해두는 콘텐츠들이 막상 필요할 때 어디에 저장했는지, 어떤 제목을 가지고 있는지도 모르는 상황이 주변에서 여럿 발생했습니다. 그래서 저장하는 콘텐츠를 찾기 쉽게 만들고, 사용자가 해당 내용을 온전히 자신의 것으로 만들 수 있도록 돕고자 이 서비스를 기획하게 되었습니다.",
    implementation: [
      "React와 TypeScript를 활용한 컴포넌트 기반 UI 설계",
      "Tanstack Query을 활용한 안정적인 비동기 데이터를 안정적으로 캐싱",
      "Joati를 활용한 atom 기반 전역 상태 관리",
      "Zod + React Hook Form을 활용한 Form 태그의 유효성 검사",
      "Framer Motion을 활용한 자연스러운 슬라이더 애니메이션 구현",
    ],
    troubleshooting: [
      {
        problem:
          "북마크 생성에서 태그 추가 시 서버에 요청을 보내고 기다려야 해서 UI가 바로 생성되지 않음",
        solution:
          "Tanstack Query의 Optimistic Update(낙관적 업데이트) 기법을 활용해서 UI가 먼저 반영되도록 함",
      },
      {
        problem:
          "링크에서 자동 추출된 썸네일을 가져올 때 일부 사이트에서는 못 가져오는 경우가 발생",
        solution:
          "서버에서 해당 썸네일 이미지를 받아 바로 S3에 업로드한 뒤 프론트에는 S3 URL을 반환하는 구조로 변경",
      },
    ],
    results:
      "모든 기능을 미완성 없이 잘 마무리 해서 시상식에서 대상을 수상했습니다.",
    reflection:
      "첫 협업 프로젝트였는데 팀 협업의 중요성을 배웠습니다. 특히 코드 리뷰와 문서화의 필요성을 깊이 느꼈습니다.",
    futureImprovements: [
      "파비콘 추출 가능한 사이트 확장",
      "모바일 웹 개발",
      "접근성 개선",
    ],
    BgColor: "from-blue-600 to-blue-400",
  },
];
