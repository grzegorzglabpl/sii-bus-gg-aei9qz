import React from "react";

const Filtrowanie = props => {
  return (
    <form>
      <h3>Filtrowanie:</h3>
      <fieldset>
        <legend>Wybierz filtry:</legend>
        <select
          onChange={props.onChangeFilterEvents}
          name="fitr-dania"
          id="filtr-dania"
        >
          <option value="">--wybierz z listy--</option>
          <option value="tofu">Tofu</option>
          <option value="warzywa">Warzywa</option>
          <option value="mieso">mieso</option>
          <option value="ryba"> ryba</option>
          <option value="woda"> Woda</option>
        </select>
        <button type="button">Filtruj</button>
      </fieldset>
    </form>
  );
};

export default Filtrowanie;
