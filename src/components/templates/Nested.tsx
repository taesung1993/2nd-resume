import Profile from "components/UI/organisms/Profile";
import Gnb from "components/UI/organisms/Gnb";
import Container from "components/UI/atoms/Container";
import { ReactNode } from "react";
import { Outlet } from "react-router-dom";

interface Props {
  children: ReactNode;
}

export default function Nested() {
  return (
    <Container>
      <header>
        <Profile />
        <Gnb />
      </header>
      <main>
        <Outlet />
      </main>
    </Container>
  );
}
