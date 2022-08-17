import Title from "components/UI/atoms/Title";
export default function Skills() {
  const skillList = [
    "React",
    "Next.js",
    "Vue",
    "Nuxt.js",
    "Angular2",
    "Svelte",
    "Sveltekit",
    "Typescript",
    "React Native",
    "Google Cloud Run",
    "Google App Engine",
  ];

  const frameworks: any[] = [
    {
      title: "React",
      diescription:
        "리액트는 디핑 알고리즘(Diffing Algorithms)을 이용하여 State와 Props 변경을 감지합니다. 그리고 감지된 부분만 리렌더링 합니다. 주로 컴포넌트를 함수형으로 선언 및 표현하여 사용하기 때문에 다른 프레임워크보다 자바스크립트에 더 친숙하다는 느낌을 받았습니다. 다만 코드의 자유성이 굉장히 높기 때문에 협업을 할 때 포매터(formatter)와 린터(linter)를 설정하여 협업 규칙을 맞추어야 합니다.",
    },
    {
      title: "Next",
      diescription:
        "React로 만드는 서버 사이드 렌더링 프레임 워크입니다. 서버 사이드에서 미리 HTML을 생성하여 클라이언트에 내려주기 때문에 SEO 처리를 할 수 있습니다.  개발자는 페이지 파일에서 어떤 함수(getStaticProps, getServerSideProps)를 사용하냐에 따라 HTML을 빌드 타임마다 생성해서 재사용의 이점을 이용할 것인지, 주기적으로 업데이트 되는 상황을 고려하여 요청마다 새로 생성된 HTML을 내려줄 것인지 선택할 수 있습니다.",
    },
    {
      title: "Vue",
      diescription:
        "하나의 컴포넌트에 html, css, javascript 형식을 가지고 있는 싱글 컴포넌트 파일을 제공합니다. 리액트처럼 가상 돔을 이용하여 Props, State 변경을 감지하지만, 양방향 바인딩, 이벤트 버스, 캐시를 이용한 반응형 변수(computed)를 쉽게 설정할 수 있는 등 React보다 더 많은 기능들을 제공합니다.",
    },
    {
      title: "Nuxt",
      diescription:
        "Vue로 만드는 서버 사이드 프레임 워크입니다. CSR 방식인 Vue.js에 SSR 라이프 사이클을 얹어서 사용합니다. 특히 서버 사이드에서 store에 접근할 수 있기 때문에 Server State와 Client State를 나눠서 관리하기 편리합니다. 또한 Nuxt Configuration에서 plugin 옵션을 이용하여 npm 라이브러리에 대한 클라이언트 Dependency를 깔끔하게 관리할 수 있습니다.",
    },
    {
      title: "Angular",
      diescription:
        "기본 베이스가 Typescript기 때문에 데코레이터(Decorator)를 이용하여 의존성을 주입합니다. 특이하게도 React, Vue와 다르게 zone.js라는 라이브러리가 Props, State 변경을 감지하고, 동기화 방식도 Promise가 아닌 Rxjs라는 라이브러리를 이용합니다. 또한 서비스라는 것을 이용하여 데이터 표시, 데이터 로직 처리에 대한 관심사를 분리할 수 있고 이를 공유 함으로써 전역적으로 상태를 관리할 수 있습니다. ",
    },
    {
      title: "Svelte",
      diescription:
        "Svelte는 자체 컴파일러가 구문을 분석하여 Props, State 변경을 감지합니다. Vue, React, Angular와 비교하여 하나의 컴포넌트로 작업할 수 있고, 대체적으로 코드가 짧기 때문에 가독성이 좋습니다. 특히 HTML 구문을 작성하는 방법이 마음에 듭니다. Vue는 요소에 directive 구문을 넣어 사용하는데 반에, Svelte는 보다는 pug처럼 중괄호와 함수를 이용하기 때문입니다. 특이하게도 배열을 포함한 Object 타입의 경우 재 할당을 해주어야 UI가 업데이트 됩니다.  속도가 굉장히 빠르다고 하는데.. 그 부분은 잘 모르겠습니다.",
    },
    {
      title: "Sveltekit",
      diescription:
        "Svelte로 만든 서버 사이드 렌더링 프레임워크입니다. 흥미로운 점이 Svelte는 선언적 변수선언 방식을 이용한다는 점에서 Vue와 비슷하다는 느낌을 받았고, Sveltekit은 Endpoint 관리 방식 때문에 Next.js와 비슷하다는 느낌을 받았습니다. 서버 사이드 로직을 Load, Handle 함수를 이용하여 관리할 수 있습니다. 또한 Layout, Routing 파일 이름을 이용하여 상속할 수 있고, match 함수를 page 파일 이름에 추가하여 라우팅 파라미터를 필터링할 수 있기 때문에 프레임워크 성향이 굉장히 강하다고 느낍니다.",
    },
  ];
  return (
    <section className="px-4">
      <Title title="프레임워크" />
      <section>
        <div className="flex flex-wrap gap-2 my-4">
          {skillList.map((skill) => (
            <div className="py-1 px-4 rounded-full border text-sm">{skill}</div>
          ))}
        </div>
        <p className="text-blue-500 mb-4 ">
          제가 사용했었던 프레임 워크에 대해 느꼈던 점을 간략하게 써보았습니다.
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
