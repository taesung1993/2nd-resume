import { NavLink } from "react-router-dom";

interface Props {
  title: string;
  link: string;
}

export default function TabItem({ title, link }: Props) {
  return (
    <NavLink
      to={link}
      className="w-full flex justify-center items-center hover:bg-default-black-50 cursor-pointer"
    >
      {({ isActive }) => {
        let result = "py-4 relative";
        if (isActive) {
          result +=
            " after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:bg-blue-500 after:rounded-full";
        }
        return <button className={result}>{title}</button>;
      }}
    </NavLink>
  );
}
