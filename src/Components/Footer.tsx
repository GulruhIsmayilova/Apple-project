import { Grid, Typography, Link } from "@mui/material";
import "./footer.css"; // Import the style file specific to the Footer component
const Footer = () => {
  return (
    <div className="footer-container-rm" >
      {/* Add the style class for the Footer component */}
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="flex-start"
        style={{
          padding: 8,
          backgroundColor: "#f5f5f7" /* Change the background color */,
          color: "#0a0a0c" /* Set text color to white */,

          textDecoration: "none",
          width: "100vw",
          marginTop: "30px",
        }}
      >
        <Grid item xs={12} md={6} lg={"auto"}>
          <Typography variant="h6">Explore</Typography>
          <ul className="footer-list">
            <li className="footer-item">
              <Link href="#">iPhone</Link>
            </li>
            <li>
              <Link href="#">iPad</Link>
            </li>
            <li>
              <Link href="#">MacBook</Link>
            </li>
            <li>
              <Link href="#">Watch</Link>
            </li>
            <li>
              <Link href="#">AirPods</Link>
            </li>
            <li>
              <Link href="#">Tv&Home</Link>
            </li>
            <li>
              <Link href="#">AirTag</Link>
            </li>
          </ul>
        </Grid>
        <Grid container xs={12} md={6} lg={"auto"} direction="column">
          <Grid item xs={6}>
            <Typography variant="h6">Entertainment</Typography>
            <ul className="footer-list">
              {/* Add class to ul element */}
              <li className="footer-item">
                {/* Add class to li element */}
                <Link href="#">Apple One</Link>
              </li>
              <li>
                <Link href="#">Apple TV+</Link>
              </li>
              <li>
                <Link href="#">Apple Music</Link>
              </li>
              <li>
                <Link href="#">Apple Arcade</Link>
              </li>
              <li>
                <Link href="#">Apple Podcasts</Link>
              </li>
              <li>
                <Link href="#">Apple Books</Link>
              </li>
              <li>
                <Link href="#">App Store</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">Account</Typography>
            <ul className="footer-list">
              {/* Add class to ul element */}
              <li className="footer-item">
                {/* Add class to li element */}
                <Link href="#">Manage Your Apple ID</Link>
              </li>
              <li>
                <Link href="#">iCloud.com</Link>
              </li>
            </ul>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={"auto"}>
          <Typography variant="h6">For Business</Typography>
          <ul className="footer-list">
            {/* Add class to ul element */}
            <li className="footer-item">
              {/* Add class to li element */}
              <Link href="#">Apple and Business</Link>
            </li>
          </ul>
        </Grid>
        <Grid container xs={12} md={6} lg={"auto"} direction="column">
          <Grid item xs={6}>
            <Typography variant="h6">About Apple</Typography>
            <ul className="footer-list">
              {/* Add class to ul element */}
              <li className="footer-item">
                {/* Add class to li element */}
                <Link href="#">Career Opportunities</Link>
              </li>
              <li>
                <Link href="#">Ethics & Compliance</Link>
              </li>
              <li>
                <Link href="#">Events</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">Apple Values</Typography>
            <ul className="footer-list">
              {/* Add class to ul element */}
              <li className="footer-item">
                {/* Add class to li element */}
                <Link href="#">Accessibility</Link>
              </li>
              <li>
                <Link href="#">Environment</Link>
              </li>
              <li>
                <Link href="#">Privacy</Link>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Grid>

      <Grid container style={{ backgroundColor: "#f5f5f7", color: "#0a0a0c", justifyContent: "center" }}>
  <Grid item xs={12} md={6}>
    <Typography variant="body2">
      &copy; {new Date().getFullYear()} Copyright © 2023 Apple Inc. All rights reserved.
    </Typography>
  </Grid>
  <Grid item xs={12} md={6}>
    <Typography variant="body2" align="right">
      Azerbaijan
    </Typography>
  </Grid>
</Grid>

    </div>
  );
};

export default Footer;
