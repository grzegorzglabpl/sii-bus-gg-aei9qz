import React, { useState } from "react";

const Alergeny = () => {
  const [alergen, setAlergen] = useState("mleko");
  

  return (
    <form method="get" action="#">
      <h1>Alergeny</h1>
      <fieldset>
        <input type="submit" value="usuń" />
        <input
          id="alergen1"
          name="alergen"
          placeholder="wpisz alergen"
          value={alergen}
          onChange={event => setAlergen(event.target.value)}
          required
          type="text"
        />
        <label for="alergen1">Alergen: {alergen}</label>
      </fieldset>
      <button
        type="submit"
        data-message="Kliknij dwa razy"
        data-error="Błąd wykonywanie"
      >
        Dodaj alergen
      </button>
      <button type="submit">Zapisz</button>
    </form>
  );
};

export default Alergeny;
