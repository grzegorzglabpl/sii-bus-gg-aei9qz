import React from "react";
import Wydarzenie from "./Wydarzenie";
import Filtrowanie from "./Filtrowanie";

const Wydarzenia = props => {
  const { przefiltrowaneWydarzenia } = props;

  return (
    <section className="Wydarzenia">
      <h2>Wydarzenia:</h2>
      <h3>{props.showMenu ? "TRUE" : "FALSE"}</h3>
      <h3>{props.dataTest}</h3>
      <Filtrowanie {...props} />
      {przefiltrowaneWydarzenia.map((item, key) => (
        <Wydarzenie {...item} />
      ))}
    </section>
  );
};

export default Wydarzenia;
