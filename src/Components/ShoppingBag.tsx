import {
  Container,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { useContext, useState } from "react";
import { AppContext } from "./App";
import { MdAdd } from "react-icons/md"; // React Icons'tan + ikonunu içe aktarın
import Paper from "@mui/material/Paper";

function App() {
  const { state, dispatch } = useContext(AppContext);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleRemoveProduct = (productName) => {
    dispatch({ type: "remove", productName });
    if (productName === "ipad") {
      setProductPrice(productName, 589);
    } else if (productName === "watch") {
      setProductPrice(productName, 789);
    } else if (productName === "iphone") {
      setProductPrice(productName, 889);
    }
  };

  const setProductPrice = (productName, price) => {
    const updatedState = state.map((item) => {
      if (item.productName === productName) {
        return { ...item, price };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedState));
  };

  const total = state.reduce((acc, item) => {
    const itemPrice = item.price || 0;
    return acc + itemPrice;
  }, 0);

  const handleCheckOut = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <Container style={{ margin: 30 }} maxWidth={false}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          backgroundColor: "white",
        }}
      >
        {state.length === 0 ? (
          <div style={{ textAlign: "center", width: "100%" }}>
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>
              Your bag is empty
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="/src/image/shopping  bag.jfif"
                alt="Empty Bag"
                style={{
                  width: "900px",
                  height: "400px",
                  display: "block",
                }}
              />
            </div>
          </div>
        ) : (
          state.map((s) => (
            <div
              key={s.productName}
              style={{
                color: "black",
                padding: 10,
                margin: 10,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={s.imageURL}
                alt={s.productName}
                style={{ width: "150px", height: "150px" }}
              />
              <span>{s.productName}</span>
              <p>Price: ${s.price || "N/A"}</p>
              <button onClick={() => handleRemoveProduct(s.productName)}>
                Remove {s.productName}
              </button>
            </div>
          ))
        )}
      </div>
      <div style={{ textAlign: "center" }}>
        {state.length > 0 && (
          <div>
            <p style={{ fontSize: "24px" }}>Total Price: ${total.toFixed(2)}</p>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleCheckOut}
            >
              Check Out
            </Button>
          </div>
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <h3>Questions About Buying</h3>
        <IconButton>
          <MdAdd />
        </IconButton>
      </div>
      <Dialog
  open={isDialogOpen}
  onClose={handleCloseDialog}
  PaperProps={{
    style: { background: 'rgba(0, 0, 0, 0.87)', boxShadow: 'none' }
  }}
>
  <DialogTitle style={{ color: 'white' }}>Your Order</DialogTitle>
  <DialogContent>
    <DialogContentText style={{ color: 'white' }}>
      Thanks for shopping with us! Your total is ${total.toFixed(2)}.
    </DialogContentText>
  </DialogContent>
  <DialogActions>
    <Button onClick={handleCloseDialog} color="primary">
      Close
    </Button>
  </DialogActions>
</Dialog>


    </Container>
  );
}

export default App;
