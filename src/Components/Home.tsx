import { Container, Grid } from "@mui/material";
import React from "react";
import ImageWithText from "./Image";
import ImageCard from "./ImageCard";

export default function Home() {
  return (
    <>
      <ImageWithText />
      <Container>
        <Grid container spacing={3}>
          {/* You can add as many `ImageCard` components as you want */}
          <ImageCard
            imageSrc="/src/image/promo_apple_event_september__c1zbjahmv18i_medium.jpg"
            title="Apple Event"
            description="Watch online on 9/12 at 10 a.m. PT."
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
    </>
  );
}
