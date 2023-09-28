import { useContext } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { AppContext } from "./App";
import { Container } from "@mui/material";

function App() {
  const { state } = useContext(AppContext);
  console.log(state)
  return state.map((s) => (
    <Container style={{margin: 30}}>
      <ul>
        <li key={s.productName} style={{ color: "black" }}>
          {s.cardCount} {s.productName}
        </li>
      </ul>
    </Container>
  ));
}

function AnaSayfa() {
  return <h2>Ana Sayfa</h2>;
}

function Hakkimizda() {
  return <h2>Hakkımızda</h2>;
}

function Iletisim() {
  return <h2>İletişim</h2>;
  const addToCart = () => {
    // Sepete eklemek istediğiniz ürünü oluşturun
    const newCartItem = {
      name: "iPhone 14", // İphone ismini dilediğiniz gibi güncelleyin
      image: "/src/image/pinkforme.jfif", // Resim yolu, dilediğiniz gibi güncelleyin
      // Diğer ürün özellikleri
    };

    // Sepet durumunu güncelleyin, yeni ürünü ekleyin
    dispatch({ type: "addToCart", item: newCartItem });
  };
}

export default App;
