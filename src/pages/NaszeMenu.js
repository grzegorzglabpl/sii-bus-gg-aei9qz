import React from "react";

import Components from "../components";

import useSiiBus from "../hooks/useSiiBus";

const { DostepneMenu, Wydarzenia } = Components;

const NaszeMenu = () => {
  const siiBus = useSiiBus();

  return (
    <section className="NaszeMenu">
      <h1>Nasze Menu</h1>
      <h2>{siiBus.showMenu ? "TRUE" : "FALSE"}</h2>

      <button onClick={siiBus.onClick}>SII BUS TEST</button>
      <Wydarzenia {...siiBus} />
      <DostepneMenu />
    </section>
  );
};

export default NaszeMenu;
