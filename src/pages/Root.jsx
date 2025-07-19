import { Outlet } from "react-router-dom";
import React from "react";
import Header from "../components/Header/Header";

export default function Root() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
