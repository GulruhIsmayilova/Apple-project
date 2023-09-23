import { createContext, useContext, useState, useReducer } from "react";

export const AppContext = createContext(null);

function reducer(state, action) {
  if (action.type === "increment") {
    return {
      cardCount: state.cardCount + 1,
    };
  } else if (action.type === "decrement") {
    // action.productName
    return { cardCount: state.cardCount - 1 };
  }
  throw Error("Unknown action.");
}

export default function App({ children }) {
  const [state, dispatch] = useReducer(reducer, { cardCount: 0 });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
