export default function Profile() {
  return (
    <section className="flex flex-col md:mb-10 mb-4">
      <div className="lg:h-80 md:h-72 h-52 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
      <div className="flex flex-col items-center justify-center lg:-mt-16 md:-mt-12 -mt-9">
        <div className="lg:w-28 lg:h-28 md:w-24 md:h-24 w-16 h-16 rounded-full bg-black overflow-hidden md:mb-4 mb-2">
          <img
            className="w-full h-full"
            src="/images/avatar.png"
            alt="avatar"
          />
        </div>
        <h1 className="md:text-2xl text-lg font-bold text-default-black md:mb-2 mb-1">
          윤태성(Mason)
        </h1>
        <h3 className="md:text-lg text-sm text-default-black-500">
          동료들과 일하며 즐거움을 느끼는 프론트엔드 개발자
        </h3>
      </div>
    </section>
  );
}
