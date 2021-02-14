import React from "react";

const DostepneMenu = () => {
  return (
    <form>
      <h3>Dostępne Menu</h3>
      <datalist id="dania">
        <option value="Owoce" />
        <option value="Owoce Morza" />
        <option value="Mięso" />
        <option value="Ryby" />
      </datalist>
      <fieldset>
        <input type="checkbox" />
        <input
          list="dania"
          type="search"
          name="dostepne-danie"
          id="dostepne-danie-1"
        />
        <select>
          <optgroup label="Warzywa">
            <option value="marchewka">marchewka</option>
            <option value="sałata">sałata</option>
          </optgroup>
          <optgroup label="Owoce morza">
            <option value="malze">małze</option>
            <option value="kraby">kraby</option>
          </optgroup>
        </select>
        <input type="time" placeholder="preferowane godziny odbioru" />
      </fieldset>
      <fieldset>
        <input type="checkbox" />
        <input
          list="dania"
          type="search"
          name="dostepne-danie"
          id="dostepne-danie-1"
        />
        <input type="time" placeholder="preferowane godziny odbioru" />
      </fieldset>
      <output>
        Uwaga! oferta do odbioru w 10 minut od chwil wybranej godziny odbioru
      </output>
      <button type="submit">Zapisz</button>
    </form>
  );
};

export default DostepneMenu;
