import TabMenu from "molecules/TabMenu";

export default function Gnb() {
  const tabs = [
    {
      title: "ABOUT ME",
    },
    {
      title: "기술 스택",
    },
    {
      title: "프로젝트",
    },
  ];
  return (
    <section>
      <nav className="w-full border-t border-b">
        <TabMenu tabs={tabs} />
      </nav>
    </section>
  );
}
