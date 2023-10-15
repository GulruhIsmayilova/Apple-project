import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AppContext } from "./App";
import "./Header.css";
import HoverMenuButton from "./HoverMenuButton";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import { MdMenu } from "react-icons/md";
import { PiHandbagLight } from "react-icons/pi";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaApple } from "react-icons/fa";

const Header = () => {
  const [isWrapperOpen, setIsWrapperOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [itemsSnd, setSndItems] = useState([]);
  const { state } = useContext(AppContext);

  const navigate = useNavigate();

  const sumWithInitial = state.reduce(
    (accumulator, currentValue) => accumulator + currentValue.cardCount,
    0
  );

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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
            minHeight: "48px !important",
          }}
        >
          <Link to="/">
            <IconButton className="nav-button">
              <FaApple style={{ color: "white", fontSize: "24px" }} />
              <span className="logo-text"></span>
            </IconButton>
          </Link>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
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
                submenuSndItems={[
                  "Mac support",
                  "iCloud+",
                  "Continuity",
                  "Mac for Business",
                ]}
                setSndItems={setSndItems}
              />
              <Link to="ipad-pro">
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
              </Link>

              <Link to="iphone-14">
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
                  submenuSndItems={[
                    "iPhone Support",
                    "iPhone Privacy",
                    "iCloud+",
                  ]}
                  setSndItems={setSndItems}
                />
              </Link>

              <Link to="watch-pro">
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
              </Link>
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
                submenuSndItems={["Apple TV + Support", "Apple Music Support"]}
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
                submenuSndItems={["Apple TV + Support", "Apple Music Support"]}
                setSndItems={setSndItems}
              />
              <Link to="where-to-buy">
                <HoverMenuButton
                  label=" Where to Buy"
                  setIsWrapperOpen={setIsWrapperOpen}
                  setItems={setItems}
                  submenuItems={["Authorixed Resellers", "Service & Support"]}
                  submenuSndItems={["Explore All Way to Buy"]}
                  setSndItems={setSndItems}
                />
              </Link>
            </nav>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" }, ml: "auto" }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MdMenu />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {[
                { name: "Mac", to: "/" },
                { name: "iPad", to: "/ipad-pro" },
                { name: "iPhone", to: "/iphone-14" },
                { name: "Watch", to: "/watch-pro" },
                { name: "AirPods", to: "/" },
              ].map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={() => {
                    if (["iPad", "Watch", "iPhone"].includes(page.name)) {
                      // Sayfa değiştirme işlemini burada gerçekleştirin
                      // Örneğin, sayfa bağlantısına yönlendirme veya sayfa içeriğini değiştirme
                    }
                    navigate(page.to);
                    handleCloseNavMenu();
                  }}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <div>
            <div className="search-icon">
              <IconButton className="nav-button">
                <BiSearchAlt2 style={{ color: "white" }} />
              </IconButton>
              <Link to="shopping-bag">
                <IconButton>
                  <PiHandbagLight style={{ color: "white" }} />{" "}
                  <span style={{ color: "white" }}>{sumWithInitial}</span>
                </IconButton>
              </Link>
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
                <li key={item}>
                  <small>{item}</small>
                </li>
              ))}
            </ul>
          </Box>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
