import React from "react";
import Routers from "../routers";

const Nawigacja = () => {
  const Links = () =>
    Object.entries(Routers).map(([key, value]) => (
      <a key={key} href={key}>
        {key}
      </a>
    ));

  return (
    <nav>
      <Links />
    </nav>
  );
};

export default Nawigacja;
