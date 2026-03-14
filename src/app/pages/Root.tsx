import { Outlet } from "react-router";
import { Header } from "../components/Header";

export function Root() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
