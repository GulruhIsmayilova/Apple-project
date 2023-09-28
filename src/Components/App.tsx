import { createContext, useReducer } from "react";

export const AppContext = createContext(null);

function reducer(state, action) {
  if (action.type === "increment") {
    const index = state.findIndex((s) => s.productName === action.productName);
    if (index !== -1) {
      const cardCount = state[index].cardCount;
      const stateCopy = state.slice();
      stateCopy.splice(index, 1);
      stateCopy.push({
        cardCount: cardCount + 1,
        productName: action.productName,
        imageURL: "/src/image/ipad mini.png", // Resim URL'sini burada ekliyoruz
      });
      return stateCopy;
    }

    return [
      ...state,
      {
        cardCount: 1,
        productName: action.productName,
        imageURL: "/src/image/ipad mini.png", // Resim URL'sini burada ekliyoruz
      },
    ];
  } else if (action.type === "decrement") {
    // action.productName
    return { cardCount: state.cardCount - 1 };
  }
  throw Error("Unknown action.");
}

export default function App({ children }) {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
