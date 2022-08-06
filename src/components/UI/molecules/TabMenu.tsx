import TabItem from "components/UI/atoms/TabItem";

interface Item {
  id: string;
  title: string;
  link: string;
}

type Tabs = Item[];

interface Props {
  tabs: Tabs;
}

export default function TabMenu({ tabs }: Props) {
  return (
    <ul className="w-full flex">
      {tabs.map((tab) => {
        return (
          <li key={tab.id} className="flex-1">
            <TabItem {...tab} />
          </li>
        );
      })}
    </ul>
  );
}
