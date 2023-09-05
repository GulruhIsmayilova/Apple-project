import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid } from '@mui/material';

interface ImageCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageSrc, title, description }) => {
  return (
    <Grid item xs={12} sm={6} md={6} lg={6}>
      <Card>
        <CardMedia
          component="img"
          src={imageSrc}
          alt={title}
          sx={{ height: 400 }}
        />
        <CardContent style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="h6" component="div" className="overlay-text">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" className="overlay-text overlay-text-secondary">
              {description}
            </Typography>
          </div>
          <Button >
            Learn More
          </Button>
        </CardContent>
        <div
          className="text-container"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'none',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
          }}
        >
          <Typography variant="h6" component="div" className="overlay-text">
            Overlay Text
          </Typography>
          <Typography variant="h6" component="div" className="overlay-text overlay-text-secondary">
            Overlay Text 2
          </Typography>
          <a href="#" className="learn-more-link">
            Learn More
          </a>
        </div>
      </Card>
    </Grid>
  );
};

export default ImageCard;
