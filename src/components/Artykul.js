import React from "react";

const Artykul = props => {
  const { artykul, showComment } = props;

  return (
    <>
      <h1>{artykul.tytul}</h1>
      <h2>{artykul.artykulId}</h2>

      {showComment ? <p>{artykul.opis}</p> : ""}
    </>
  );
};

export default Artykul;
