import TabMenu from "molecules/TabMenu";

export default function Gnb() {
  const tabs = [
    {
      id: "about",
      title: "ABOUT ME",
      link: "/",
    },
    {
      id: "skill",
      title: "기술 스택",
      link: "/skills",
    },
    {
      id: "project",
      title: "프로젝트",
      link: "projects",
    },
  ];
  return (
    <section>
      <nav className="w-full border-b">
        <TabMenu tabs={tabs} />
      </nav>
    </section>
  );
}
