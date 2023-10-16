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
        imageURL: action.imageURL,
        id: action.id,
        price: action.price, 
      });
      return stateCopy;
    }

    return [
      ...state,
      {
        cardCount: 1,
        productName: action.productName,
        imageURL: action.imageURL,
        price: action.price, 
      },
    ];
  } else if (action.type === "decrement") {
    // Handling decrement action (You need to implement this part)
    // ...
    return state;
  } else if (action.type === "remove") {
    // If the action type is "remove," remove the product from the state
    return state.filter(
      (product) => product.productName !== action.productName
    );
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
