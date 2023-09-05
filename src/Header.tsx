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
              submenuSndItems={["Mac support", "iCloud+","Continuity","Mac for Business"]}
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
              submenuSndItems={["iPad support", "iCloud+"]}
              setSndItems={setSndItems}
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
              submenuSndItems={["iPhone Support", "iPhone Privacy","iCloud+"]}
              setSndItems={setSndItems}
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
              submenuSndItems={["Apple Watch Support "]}
              setSndItems={setSndItems}
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
              submenuSndItems={["AirPods Support, Apple Music "]}
              setSndItems={setSndItems}
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
              submenuSndItems={["Explore TV& Home, Apple TV 4K"]}
              setSndItems={setSndItems}
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
              submenuSndItems={["Apple TV + Support","Apple Music Support"]}
              setSndItems={setSndItems}
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
              submenuSndItems={["Apple TV + Support","Apple Music Support"]}
              setSndItems={setSndItems}
              
            />
            <HoverMenuButton
              label=" Where to Buy"
              setIsWrapperOpen={setIsWrapperOpen}
              setItems={setItems}
              submenuItems={["Authorixed Resellers", "Service & Support"]}
              submenuSndItems={["Apple TV + Support","Apple Music Support"]}
              setSndItems={setSndItems}
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
          <Box
            component="main"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <ul id="list" className="custom-list-style">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <ul id="list" className="custom-list-style">
              {itemsSnd.map((item) => (
                <li key={item}><small>{item}</small></li>
              ))}
            </ul>
          </Box>
        </Container>
      </AppBar>
 
    </div>
  );
};

export default Header;
