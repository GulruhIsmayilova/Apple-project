import { AppBar, Box, Container, IconButton, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { FaApple, FaSearch, FaShoppingBag } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [isWrapperOpen, setIsWrapperOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsWrapperOpen(true);
  };

  const handleMouseLeave = () => {
    setIsWrapperOpen(false);
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
            <IconButton
              className="nav-button"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Typography variant="body1" sx={{ color: "#fbfbfd" }}>
                Mac
              </Typography>
            </IconButton>
            <IconButton className="nav-button">
              <Typography variant="body1" sx={{ color: "#fbfbfd" }}>
                iPad
              </Typography>
            </IconButton>
            <IconButton className="nav-button">
              <Typography variant="body1" sx={{ color: "white" }}>
                iPhone
              </Typography>
            </IconButton>
            <IconButton className="nav-button">
              <Typography variant="body1" sx={{ color: "white" }}>
                Watch
              </Typography>
            </IconButton>

            <IconButton className="nav-button">
              <Typography variant="body1" sx={{ color: "white" }}>
                AirPods
              </Typography>
            </IconButton>
            <IconButton className="nav-button">
              <Typography variant="body1" sx={{ color: "white" }}>
                TV&Home
              </Typography>
            </IconButton>
            <IconButton className="nav-button">
              <Typography variant="body1" sx={{ color: "white" }}></Typography>
            </IconButton>
            <IconButton className="nav-button">
              <Typography variant="body1" sx={{ color: "white" }}>
                Entertaiment
              </Typography>
            </IconButton>
            <IconButton className="nav-button">
              <Typography variant="body1" sx={{ color: "white" }}>
                Support
              </Typography>
            </IconButton>
            <IconButton className="nav-button">
              <Typography variant="body1" sx={{ color: "white" }}>
                Where to Buy
              </Typography>
            </IconButton>
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
        <Container id="wrapper" className={isWrapperOpen ? "open" : "close"}>
        <Box component="main" sx={{ p: 3 }}>
          <ul id="list">
          <li>Explore All Mac</li>
              <li>MacBook Air</li>
              <li>MacBook Pro</li>
              <li>iMac</li>
              <li>Mac mini</li>
              <li>Mac Studio</li>
              <li>Mac Pro</li>
              <li>Dsiplays</li>
              
          </ul>
        </Box>
      </Container>
      
      </AppBar>
        <Box component="main" sx={{ p: 3 }}>
          <section className="section">
            <h2 className="title">iPhone 14</h2>
            <p className="paragraph">Big and bigger.</p>
            <a href="#" className="link">
              Learn more.
            </a>
          </section>
        </Box>
    </div>
  );
};

export default Header;
