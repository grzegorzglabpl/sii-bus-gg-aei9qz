import React from "react";
import { useRoutes } from "hookrouter";
import Routers from "./routers";
import "./style.css";
import Components from "./components";

const { Naglowek, Nawigacja, Stopka } = Components;

export default function App() {
  const routeResult = useRoutes(Routers);
  return (
    <>
      <Naglowek />
      <Nawigacja />
      <main className="Kontent">{routeResult}</main>
      <Stopka />
    </>
  );
}
