import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import ImageWithText from "./Image";
import ImageCard from './ImageCard';
import { Grid, Container } from '@mui/material';
import Footer from "./Footer";


const App: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchIconClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearch = (searchText: string) => {
    console.log("Axtarış: ", searchText);
  };

  return (
    <Router>
      <div>
        <Header />
        <IconButton className="nav-button" onClick={handleSearchIconClick}>
          <FaSearch style={{ color: "white" }} />
        </IconButton>
            <ImageWithText />
        <Container>
      <Grid container spacing={3}>
        {/* İstədiyiniz sayda `ImageCard` əlavə edə bilərsiniz */}
        <ImageCard
          imageSrc="/src/image/promo_apple_event_september__c1zbjahmv18i_medium.jpg"
          title="Apple Event"
          description="Watch online on 9/12 at 10 a.m. PT.."
        />

        <ImageCard
          imageSrc="/src/image/promo_iphone14pro_spring__c7pyovk04j2a_medium.jpg"
          title="iPhone 14 Pro"
          description="Pro. Beyond"
        />

        <ImageCard
          imageSrc="/src/image//promo_ipadpro_refresh__evi9utuixwuq_medium.jpg"
          title="iPad Pro"
          description="SuperCharged by."
        />
          <ImageCard
          imageSrc="/src/image/promo_tv4k_avail__e17d9isb0vwy_small.jpg"
          title="TV 4K"
          description="A higher definition of TV."
          
        />
          <ImageCard
          imageSrc="/src/image/promo_apple_watch_se_spring__cld5iup1zfrm_small.jpg"
          title="Watch"
          description="A great deal to love."
        />
          <ImageCard
          imageSrc="/src/image/hero_iphone14_preorder__c4g2wjzuugqe_small.jpg"
          title="Trade In"
          description="Upgrade and save. It’s that easy."
          
        />
      </Grid>
    </Container>
    <Footer />
      </div>
    </Router>
  );
};

export default App;
