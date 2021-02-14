import React from "react";

const PreferencjeZywieniowe = () => {
  return (
    <form>
      <fieldset>
        <legend>Preferencje Żywieniowe</legend>
        <label for="preferencje-zywieniowe-mieso">Mięso</label>
        <input
          id="preferencje-zywieniowe-mieso"
          name="PreferencjeZywieniowe"
          type="checkbox"
          value="Mięso"
        />
        <label for="preferencje-zywieniowe-warzywa">Warzywa</label>
        <input
          id="preferencje-zywieniowe-warzywa"
          name="PreferencjeZywieniowe"
          type="checkbox"
          value="Warzywa"
        />
        <label for="preferencje-zywieniowe-owoce">Owoce</label>
        <input
          id="preferencje-zywieniowe-owoce"
          name="PreferencjeZywieniowe"
          type="checkbox"
          value="Owoce"
        />
        <label for="preferencje-zywieniowe-owoce-morza">Owoce Morza</label>
        <input
          id="preferencje-zywieniowe-owoce-morza"
          name="PreferencjeZywieniowe"
          type="checkbox"
          value="OwoceMorza"
        />
      </fieldset>
    </form>
  );
};

export default PreferencjeZywieniowe;
