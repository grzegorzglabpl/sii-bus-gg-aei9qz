import React from "react";
import Components from "../components";
import Hooks from "../hooks/";

const { Naglowek, Nawigacja, Stopka, Artykuly } = Components;

const Aktualnosci = () => {
  const siiBus = Hooks.useSiiBus();
  return <Artykuly {...siiBus} />;
};

export default Aktualnosci;
