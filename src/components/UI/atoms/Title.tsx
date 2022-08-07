import { ReactNode } from "react";

interface Props {
  title: string;
}

export default function Title({ title }: Props) {
  return (
    <h3 className="md:text-2xl text-lg font-bold text-default-black md:mb-2 mb-1">
      {title}
    </h3>
  );
}
