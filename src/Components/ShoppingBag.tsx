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
import { MdAdd } from "react-icons/md"; // Import the + icon from React Icons
import Paper from "@mui/material/Paper";

function App() {
  const { state, dispatch } = useContext(AppContext);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Function to remove a product from the shopping cart
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

  // Function to set the price of a product
  const setProductPrice = (productName, price) => {
    const updatedState = state.map((item) => {
      if (item.productName === productName) {
        return { ...item, price };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedState));
  };

  // Calculate the total price of the items in the shopping cart
  const total = state.reduce((acc, item) => {
    const itemPrice = item.price || 0;
    return acc + itemPrice;
  }, 0);

  // Function to open the checkout dialog
  const handleCheckOut = () => {
    setIsDialogOpen(true);
  };

  // Function to close the checkout dialog
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <Container  >
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
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img
                src="/src/image/shopping  bag.jfif"
                alt="Empty Bag"
                style={{
                  width: "900px",
                  height: "400px",
                  display: "block",
                  marginBottom: "20px", // Added margin between two images
                }}
              />
              <p style={{ fontSize: "24px", fontWeight: "bold" }}>
                Your bag is empty
              </p>
              {/* Add the second image and style it to center it */}
     
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
          <MdAdd /> {/* Render the + icon */}
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
