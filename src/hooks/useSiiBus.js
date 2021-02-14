import { useReducer } from "react";

const initialState = {
  showMenu: false,
  showComments: false,
  showArticles: false,
  przefiltrowaneWydarzenia: [],
  wydarzenia: [
    {
      id: 1,
      nazwa: "wydarzenie 1",
      opisWydarzenia: "Opis Wydarzenia 1",
      dataWydarzenia: "2020-02-28",
      skladniki: ["mieso", "warzywa", "woda", "przyprawy"],
      dostepneMenu: [
        {
          id: 1,
          nazwDania: "zupa pomidorowa",
          skladniki: ["mieso", "warzywa", "woda", "przyprawy"]
        }
      ]
    },
    {
      id: 2,
      nazwa: "wydarzenie 2",
      opisWydarzenia: "Opis Wydarzenia 2",
      dataWydarzenia: "2020-02-28",
      skladniki: ["tofu", "warzywa", "woda", "przyprawy"],
      dostepneMenu: [
        {
          id: 2,
          nazwDania: "zupa ogorkowa weganska",
          skladniki: ["tofu", "warzywa", "woda", "przyprawy"]
        }
      ]
    },
    {
      id: 3,
      nazwa: "wydarzenie 3",
      opisWydarzenia: "Opis Wydarzenia 3",
      dataWydarzenia: "2020-02-28",
      skladniki: ["tofu", "warzywa", "woda", "przyprawy"],
      dostepneMenu: [
        {
          id: 1,
          nazwDania: "zupa rybna",
          skladniki: ["ryba", "warzywa", "woda", "przyprawy"]
        }
      ]
    },
    {
      id: 4,
      nazwa: "wydarzenie 4",
      opisWydarzenia: "Opis Wydarzenia 4",
      skladniki: ["ryba", "warzywa", "woda", "przyprawy"],
      dataWydarzenia: "2020-02-28",
      dostepneMenu: [
        {
          id: 1,
          nazwDania: "ryba pieczona",
          skladniki: ["ryba", "przprawy"]
        }
      ]
    }
  ],
  artykuly: [
    {
      artykulId: 1,
      tytul: "Darmowa wyżerka dla kontraktorów 3",
      opis: "opis do darmowej wyzerki dla kontraktorow"
    },
    {
      artykulId: 2,
      tytul: "SII Star maja hamburery  za free",
      opis: "opis do SII Star maja hamburery  za free"
    },
    {
      artykulId: 3,
      tytul: "Darmowa wyżerka dla manadzmentu",
      opis: "manadzement moze za darmo spozywac salatki"
    },
    {
      artykulId: 4,
      tytul: "Darmowa wyżerka dla HR",
      opis: "HR moze spozywac owoce morza"
    },
    {
      artykulId: 5,
      tytul: "Darmowa wyżerka dla CEO",
      opis: "opis do darmowej wyzerki dla CEO - pierogi z grzybami i kapusta"
    }
  ]
};

const actions = {
  SHOW_MENU: "SHOW_MENU",
  SHOW_COMMENTS: "SHOW_COMMENTS",
  SHOW_ARTICLES: "SHOW_ARTICLES",
  SHOW_EVENTS: "SHOW_EVENTS",
  FILTER_EVENTS: "FILTER_EVENTS"
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SHOW_MENU:
      return {
        ...state,
        showMenu: !state.showMenu
      };

    case actions.SHOW_COMMENTS:
      return {
        ...state,
        showComments: !state.showComments
      };

    case actions.SHOW_ARTICLES:
      return {
        ...state,
        showArticles: !state.showArticles
      };

    case actions.SHOW_EVENTS:
      return {
        ...state
      };

    case actions.FILTER_EVENTS: {
      const filter = action.payload;

      const wyszukaneWydarzenia = state.wydarzenia.filter(
        i => i.skladniki.indexOf(filter) > -1
      );

      return {
        ...state,
        przefiltrowaneWydarzenia: wyszukaneWydarzenia
      };
    }

    default:
      throw new Error("SiiBus reducer error - action not supported.");
  }
};

export const useSiiBus = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onClick = event => {
    event.preventDefault();
    console.log("click button");
    dispatch({ type: actions.SHOW_MENU, payload: event });
  };

  const onClickShowComments = event => {
    event.preventDefault();
    console.log("click show comments");
    dispatch({ type: actions.SHOW_COMMENTS, payload: event });
  };

  const onClickShowArticles = event => {
    event.preventDefault();
    console.log("click show article");
    dispatch({ type: actions.SHOW_ARTICLES, payload: event });
  };

  const onClickShowEvents = event => {
    event.preventDefault();
    console.log("click show events");
    dispatch({ type: actions.SHOW_EVENTS, payload: event });
  };

  const onChangeFilterEvents = event => {
    event.preventDefault();
    console.log("click filter events");
    // console.log(event.currentTarget.value);
    dispatch({
      type: actions.FILTER_EVENTS,
      payload: event.currentTarget.value
    });
  };

  return {
    ...state,
    onClick,
    onClickShowComments,
    onClickShowArticles,
    onClickShowEvents,
    onChangeFilterEvents
  };
};

export default useSiiBus;
