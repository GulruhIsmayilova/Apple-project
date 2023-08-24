import { AppBar, Box, Container, IconButton, Toolbar } from "@mui/material";
import { useState } from "react";
import { FaApple, FaSearch, FaShoppingBag } from "react-icons/fa";
import "./Header.css";
import HoverMenuButton from "./HoverMenuButton";

const Header = () => {
  const [isWrapperOpen, setIsWrapperOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [itemsSnd, setSndItems] = useState([]);

  return (
    <div>
      <AppBar
        sx={{
          backgroundColor: "rgb(0 0 0 / 80%)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "default",
            height: "44px",
          }}
        >
          <IconButton className="nav-button">
            <FaApple style={{ color: "white" }} />
            <span className="logo-text"></span>
          </IconButton>
          <nav
            className="nav-list"
            style={{ display: "flex", alignItems: "center", gap: 2 }}
          >
            <HoverMenuButton
              label="Mac"
              setIsWrapperOpen={setIsWrapperOpen}
              setItems={setItems}
              submenuItems={[
                "MacBook Air",
                "MacBook Pro",
                "iMac",
                "Mac mini",
                "Mac Studio",
                "Mac Pro",
                "Displays",
              ]}
              submenuSndItems={["Mac support", "iCloud+"]}
              setSndItems={setSndItems}
            />
            <HoverMenuButton
              label="iPad"
              setIsWrapperOpen={setIsWrapperOpen}
              setItems={setItems}
              submenuItems={[
                "Explore All iPad",
                "iPad Pro",
                "iPad mini",
                "iPad Air",
                "iPad",
                "Apple Pencil",
                "Keyboards",
              ]}
            />
            <HoverMenuButton
              label="iPhone"
              setIsWrapperOpen={setIsWrapperOpen}
              setItems={setItems}
              submenuItems={[
                "Explore All iPhone ",
                "iPhone Pro",
                "iPhone SE",
                "iPhone 14",
                "iPhone 13 ",
                "iPhone 12",
              ]}
            />
            <HoverMenuButton
              label="Watch"
              setIsWrapperOpen={setIsWrapperOpen}
              setItems={setItems}
              submenuItems={[
                "Explore All Watch ",
                "Apple Watch Ultra",
                "Apple Watch Series 8",
                "Apple Watch SE",
                "Apple Watch Nike",
              ]}
            />
            <HoverMenuButton
              label=" AirPods"
              setIsWrapperOpen={setIsWrapperOpen}
              setItems={setItems}
              submenuItems={[
                "Explore All AirPods",
                "AirPods Pro 2nd generation",
                "AirPods 2nd generation",
                "AirPods Pro 3rd generation",
                "AirPods Max",
              ]}
            />

            <HoverMenuButton
              label=" TV&Home"
              setIsWrapperOpen={setIsWrapperOpen}
              setItems={setItems}
              submenuItems={[
                "Explore All TV&Home",
                "Apple TV 4K",
                "Apple TV Support",
                "Apple TV app",
                "Apple TV+",
              ]}
            />

            <HoverMenuButton
              label=" Entertaiment"
              setIsWrapperOpen={setIsWrapperOpen}
              setItems={setItems}
              submenuItems={[
                "Explore All Entertaiment  ",
                "Apple One",
                "Apple Music ",
                "Apple Arcade",
                "Apple Podcasts",
                "Apple Books",
                "App Store",
              ]}
            />

            <HoverMenuButton
              label="  Support"
              setIsWrapperOpen={setIsWrapperOpen}
              setItems={setItems}
              submenuItems={[
                "iPhone ",
                "Mac",
                "iPad",
                "Watch",
                "Airpods",
                "Music",
                "TV",
              ]}
            />
            <HoverMenuButton
              label=" Where to Buy"
              setIsWrapperOpen={setIsWrapperOpen}
              setItems={setItems}
              submenuItems={["Authorixed Resellers", "Service & Support"]}
            />
          </nav>
          <div>
            <div className="search-icon">
              <IconButton className="nav-button">
                <FaSearch style={{ color: "white" }} />
              </IconButton>
              <IconButton>
                <FaShoppingBag style={{ color: "white" }} />
              </IconButton>
            </div>
          </div>
        </Toolbar>
        <Container
          id="wrapper"
          className={isWrapperOpen ? "open" : "close"}
          onMouseEnter={() => setIsWrapperOpen(true)}
          onMouseLeave={() => setIsWrapperOpen(false)}
        >
          <Box component="main">
            <ul id="list" className="custom-list-style">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <ul id="list" className="custom-list-style">
              {itemsSnd.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Box>
        </Container>
      </AppBar>
      <Container sx={{ width: "100vw", textAlign: "center" }}>
        <Box component="main" sx={{ p: 10, textAlign: "center" }}>
          <section className="section">
            <h2 className="title">iPhone 14</h2>
            <p className="paragraph">Big and bigger.</p>
            <a href="#" className="link">
              Learn more.
            </a>
          </section>
        </Box>
      </Container>
      <figure>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100vw",
          }}
        >
          <img
            src="/src/image/hero_macbook_air_15_midnight__ct0pgwizvree_mediumtall.jpg"
            alt="Apple Logo"
            style={{ height: "100%", width: "100%" }}
          />
        </Box>

        <figcaption
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "grey",
            padding: "10px",
            fontSize: "24px",
            textAlign: "center",
          }}
        >
          <Container sx={{ width: "100vw", textAlign: "center" }}>
            <Box component="main" sx={{ textAlign: "center" }}>
              <section className="section">
                <h2 className="title">iPhone 14</h2>
                <p className="paragraph">Wonderfull.</p>
                <a href="#" className="link">
                  Learn more.
                </a>
              </section>
            </Box>
          </Container>
        </figcaption>
      </figure>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
        }}
      >
        <img
          src="/src/image/promo_apple_watch_series_8_spring__d9hfvufh7hyu_small_2x.jpg"
          alt="Apple Logo"
          style={{ height: "100%", width: "100%" }}
        />
      </Box>
    </div>
  );
};

export default Header;