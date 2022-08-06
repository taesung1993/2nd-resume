interface TabItem {
  title: string;
}

type Tabs = TabItem[];

interface Props {
  tabs: Tabs;
}

export default function TabMenu({ tabs }: Props) {
  return (
    <ul className="w-full flex">
      {tabs.map((tab) => {
        return (
          <li className="flex-1 flex justify-center items-center">
            <button>{tab.title}</button>
          </li>
        );
      })}
    </ul>
  );
}
