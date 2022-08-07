import Title from "components/UI/atoms/Title";

export default function Projects() {
  return (
    <section className="px-4">
      <section>
        <Title title="참여했던 프로젝트" />

        <ul>
          <li className="border p-2 mb-4">
            <a href="https://conping-yqoln5urha-an.a.run.app/" target="_blank">
              <h6 className="text-base mb-2 font-bold">콘핑(CONPING)</h6>
              <div className="text-black-default-500 text-sm mb-2">
                콘텐츠와 쇼핑을 함께 즐기는 <br />
                신개념 콘텐츠 커머스 플랫폼
              </div>
              <div className="text-blue-500 text-sm mb-2">
                Sveltekit, Typescript, Graphql, Cloud Run
              </div>
              <p className="text-sm">
                Sveltekit과 Typescript를 이용한 개발
                <br /> Cloud Run으로 workflow를 작성하여 배포
                <br />
                graphql를 서버 사이드로 태워 BFF(Backend For Frontend) 구현
              </p>
            </a>
          </li>

          <li className="border p-2">
            <a href="https://trend.gollala.com/" target="_blank">
              <h6 className="text-base mb-2 font-bold">Gollala Trend</h6>
              <div className="text-black-default-500 text-sm mb-2">
                빅데이터 기반으로 <br />
                동대문의 신상과 인기랭킹, 이미지 검색, 패션 트렌드를 제공하는
                <br />
                동대문 도매 패션 플렛폼
              </div>
              <div className="text-blue-500 text-sm mb-2">
                Angular, Webpack 5 Module Federation, Rxjs
              </div>
              <p className="text-sm">
                Angular를 이용한 Frontend 개발
                <br /> Webpack 5 Module Federation을 이용한 Micro Frontend를
                이용한 개발
              </p>
            </a>
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <Title title="그 외 활동" />

        <ul>
          <li className="border p-2 mb-4">
            <a
              href="https://docs.google.com/spreadsheets/d/1dJRCV2lLXnG_uHi3_vpluB7zhm-7iaBkfHSUaP5YLxo/edit#gid=0/"
              target="_blank"
            >
              <div className="text-black-default-500 text-sm mb-2 flex">
                <img
                  className="w-16 h-20"
                  src="/images/HTTP_book.png"
                  alt="http-book"
                />
                <div className="pl-4">
                  <h6 className="text-base mb-2 font-bold">
                    HTTP 다람쥐 스터디
                  </h6>
                  <p>
                    마음에 맞는 동료들과 HTTP 완벽 가이드라는 책으로 스프레드
                    시트를 이용하여 스터디를 진행중입니다.
                  </p>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </section>
    </section>
  );
}
