import React from "react";
import Artykul from "./Artykul";

const Artykuly = props => {
  return (
    <>
      <h1>Artykuly</h1>
      <button onClick={props.onClickShowComments}>
        {!props.showComments ? "Pokaz komentarze" : "Ukryj komentarze"}
      </button>
      <button onClick={props.onClickShowArticles}>
        {!props.showArticles ? "Pokaz Artykuly" : "Ukryj Artykuly"}
      </button>

      {props.showArticles ? (
        props.artykuly.map((item, i) => (
          <Artykul artykul={item} showComment={props.showComments} />
        ))
      ) : (
        <h4>brak artykulow</h4>
      )}
    </>
  );
};

export default Artykuly;
