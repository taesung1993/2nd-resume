import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Container({ children }: Props) {
  return (
    <section className="max-w-screen-xl w-full mx-auto px-4">
      {children}
    </section>
  );
}
