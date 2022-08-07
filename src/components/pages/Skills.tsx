import Title from "components/UI/atoms/Title";
export default function Skills() {
  const frameworks: any[] = [
    {
      title: "React",
      diescription:
        "리액트는 디핑 알고리즘(Diffing Algorithms)을 이용하여 상태, Props의 변경을 감지하여 변경된 부분만 렌더링을 합니다. 개인적으로 함수나 클래스를 만들고 DOM을 반환하는 컴포넌트의 구조 때문에 다른 프레임워크보다 자바스크립트 에 더 친숙하다는 느낌을 받습니다. 다만 코드의 자유성이 굉장히 높기 때문에 협업을 할 때 포매터(formatter)와 린터(linter)는 필수적이라 생각합니다.",
    },
    {
      title: "Next",
      diescription:
        "React로 만드는 서버 사이드 렌더링 프레임 워크입니다. 서버 사이드로 렌더링을 미리 할 수 있기 때문에 검색 엔진이 돔에 연결되어 있는 하이퍼 텍스트를 미리 탐색할 수 있어 미리 SEO 처리에 용이합니다. getServerSideProps, getStaticProps를 이용하여 SSR, SSG을 선택하여 미리 렌더링을 할 수 있고, 개인적으로 endPoint 기능 굉장히 좋아합니다.",
    },
    {
      title: "Vue",
      diescription:
        "리액트와 다르게 하나의 컴포넌트에 html, css, javascript 형식을 가지고 있는 싱글 컴포넌트로 개발환경을 제공합니다. 또한, props로만을 사용하여 부모 - 자식 컴포넌트간에 단방향 통신을 하는 리액트와 다르게 emit을 이용하여 양방향 통신을 할 수 있습니다.",
    },
    {
      title: "Nuxt",
      diescription:
        "Vue로 만드는 서버 사이드 프레임 워크입니다. next.js보다 좀 더 프레이워크 성향이 강하다고 생각합니다. Server-side 전용 LifeCycle이 존재하고, 특히 서버 사이드 쪽에서 store에 접근할 수 있다는 점은 굉장히 매력적인 옵션이라 생각합니다. 또한, 간혹 Client Side 전용 외부 스크립트를 서버 사이드 프레임워크에 사용하다보면, 처음에 실행되는 환경이 Node.js이기 때문에 window 객체가 없어서 렌더링 오류가 나는 경우가 있습니다. Nuxt는 외부 스크립트를 Vue 생성자를 이용하여 nuxt.config.js의 플러그인에 추가만 하면 깔끔하게 해결할 수 있기 때문에 개인적으로 이 옵션도 굉장히 매력적이라 생각합니다. ",
    },
    {
      title: "Angular",
      diescription:
        "상태 변경 감지가 특이합니다. Virtual Dom을 이용하는 리액트, 뷰와 다르게 zone.js라는 라이브러리가 상태 변경 감지를 하여 앵귤러에게 알려주어 자동 변경 감지와 렌더링이 일어나게 합니다. 또한 비동기 함수를 동기화 할 때에는 보통 Promise보다는 Rxjs라는 라이브러리의 Observable이라는 함수를 이용하여 구독(Subscribe/UnSubscribe) 형식을 이용합니다.",
    },
    {
      title: "Svelte",
      diescription:
        "스벨트 또한 앵귤러와 마찬가지로 자동 변경 감지를 해줍니다. Svelte 코드들은 Svelte 컴파일러가 구문 분석 후 상태 변경 감지 함수를 호출하는 코드로 컴파일 해주는 방식으로 상태 변경을 감지합니다. 또한 컴파일러가 템플릿 코드도 분석하기 떄문에 자바스크립트가 돔을 조작하는 방식과 비슷하게 컴파일을 해주기 떄문에 가볍고 빠르다고 하는데, 개인적으로 속도 차이는 크게 느끼지는 못했습니다. 하지만 확실히 코드가 짧고, 가독성이 좋았습니다.",
    },
    {
      title: "Sveltekit",
      diescription:
        "Next.js와 비슷하다는 느낌을 받았습니다. Next.js의 EndPoint 기능을 그대로 사용할 수 있고, next.js의 getStaticPaths 기능을 match라는 함수를 이용하여 라우팅의 다이나믹 파라미터를 필터링할 수 있다는 점에서 굉장히 흥미로웠습니다.",
    },
  ];
  return (
    <section className="px-4">
      <Title title="프레임워크" />
      <section>
        <p className="text-default-black-500 mb-4">
          개인적인 느낀점을 간략하게 써보았습니다.
        </p>
        <ul>
          {frameworks.map((f) => {
            return (
              <li key={f.title} className="mb-6">
                <h6 className="text-xl mb-2">{f.title}</h6>
                <div className="pl-1">{f.diescription}</div>
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
}
