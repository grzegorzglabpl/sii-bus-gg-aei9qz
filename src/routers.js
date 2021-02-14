import React from "react";
import Pages from "./pages";

const { Aktualnosci, MojeZamowienia, MojProfil, NaszeMenu } = Pages;

const Routers = {
  "/": () => <Aktualnosci />,
  "/aktualnosci": () => <Aktualnosci />,
  "/moje-zamowienia": () => <MojeZamowienia />,
  "/moj-profil": () => <MojProfil />,
  "/nasze-menu": () => <NaszeMenu />
};

export default Routers;
