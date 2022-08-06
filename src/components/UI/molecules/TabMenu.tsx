interface TabItem {
  title: string;
}

type Tabs = TabItem[];

interface Props {
  tabs: Tabs;
}

export default function TabMenu({ tabs }: Props) {
  const activeClass =
    " after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:bg-blue-500 after:rounded-full";
  return (
    <ul className="w-full flex">
      {tabs.map((tab) => {
        return (
          <li className="flex-1 flex justify-center items-center hover:bg-default-black-50 cursor-pointer">
            <button className={"py-4 relative" + activeClass}>
              {tab.title}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
