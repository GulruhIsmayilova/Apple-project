import React, { useState, useContext } from "react";
import { AppContext } from "./App";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import "./BuyPage.css";

function BuyPage() {
  const [memory, setMemory] = useState("");
  const [storage, setStorage] = useState("");
  const [color, setColor] = useState("");
  const [slide, setSlide] = useState(0);
  const { dispatch } = useContext(AppContext);

  const handleMemoryChange = (event) => {
    setMemory(event.target.value);
  };

  const handleStorageChange = (event) => {
    setStorage(event.target.value);
  };

  const handleColorChange = (selectedColor) => {
    setColor(selectedColor);
  };

  const nextSlide = () => {
    setSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };
  const handleRemoveFromCart = () => {
    dispatch({ type: "decrement", productName: "watch" });
  };

  const images = [
    "/src/image/pinkforme.jfif",
    "/src/image/left.jfif",
    "/src/image/leftt.jfif",
  ];

  const addToCart = () => {
    const newCartItem = {
      memory,
      storage,
      color,
    };

    dispatch({ type: "increment", productName: "watch" });

    // Sepete ekleme işlemlerini burada tamamlayabilirsiniz.
  };

  return (
    <Container style={{ maxWidth: "95vw" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} className="image-container">
          <Grid item xs={12} sm={12} className="image-container">
            <button className="slide-button left" onClick={prevSlide}>
              <span className="chevron-left">&#8249;</span>
            </button>
            <img src={images[slide]} alt="iPhone Image" className="iphone-image" />
            <button className="slide-button right" onClick={nextSlide}>
              <span className="chevron-right">&#8250;</span>
            </button>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} className="content-container">
          <h1 className="main-title">Buy iPhone 14</h1>
          <p>
            <span className="price">$579.00 after trade-in ($829.00 due today)</span>
          </p>

          <Box textAlign="left" mt={4}>
            <h2>Model</h2>
            <p>
              <span>Which is the best for you?</span>
            </p>
            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="memory-select">Model</InputLabel>
              <Select
                label="Memory"
                value={memory}
                onChange={handleMemoryChange}
                inputProps={{
                  name: "memory",
                  id: "memory-select",
                }}
              >
                <MenuItem value="iPhone14">iPhone 14</MenuItem>
                <MenuItem value="iPhone14Plus">iPhone 14+</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box textAlign="left" mt={4}>
            <h2>Storage</h2>
            <p>
              <span>How much space do you need?</span>
            </p>
            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="storage-select">Storage</InputLabel>
              <Select
                label="Storage"
                value={storage}
                onChange={handleStorageChange}
                inputProps={{
                  name: "storage",
                  id: "storage-select",
                }}
              >
                <MenuItem value="64GB">64GB</MenuItem>
                <MenuItem value="128GB">128GB</MenuItem>
                <MenuItem value="256GB">256GB</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box textAlign="left" mt={4}>
            <h2>Color</h2>
            <p>
              <span>Finish. Pick your favorite.</span>
            </p>
            <Box className="color-options" mt={2}>
              <img
                src="/src/image/qirmizi.jfif"
                alt="Red"
                width="30"
                onClick={() => handleColorChange("red")}
                className="color-option"
              />
              <img
                src="/src/image/purple.jfif"
                alt="Yellow"
                width="30"
                onClick={() => handleColorChange("yellow")}
                className="color-option"
              />
              <img
                src="/src/image/mavi.jfif"
                alt="Blue"
                width="30"
                onClick={() => handleColorChange("blue")}
                className="color-option"
              />
              <img
                src="/src/image/qara.jfif"
                alt="Purple"
                width="30"
                onClick={() => handleColorChange("purple")}
                className="color-option"
              />
              <img
                src="/src/image/sari.jfif"
                alt="Black"
                width="30"
                onClick={() => handleColorChange("black")}
                className="color-option"
              />
            </Box>
          </Box>
          <Button className="custom-button" onClick={addToCart}>
        Finish the order
          </Button>
          <Button onClick={handleRemoveFromCart}>Remove from Cart</Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default BuyPage;
