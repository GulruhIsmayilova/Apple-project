import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box"; 
import "./wheretobuy.css"; 

function WhereToBuy() {
  return (
    <Grid container spacing={2} style={{width:"100vw"}} >
      <Grid item xs={12}>
        <div className="fixed-header">
          <h2>
            <a href="#">Where To Buy</a>
          </h2>
        </div>
      </Grid>
      <Grid item xs={6} >
        <Card className="custom-card">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100%"
            
          >
            <CardMedia
              component="img"
              height="140"
              image="/src/image/esas.png"
              alt="Sample Image"
              className="custom-card-media"
              width=" 440px"
              aspect-ratio="auto 440 / 238"
       
            />
            <CardContent>
              <Typography variant="h6">Apple Products</Typography>
              <Typography variant="body2" color="textSecondary">
                Card Description 1
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card className="custom-card">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100%"
          >
            <CardMedia
              component="img"
              height="140"
              image="/src/image/esas2.png"
              alt="Sample Image"
              className="custom-card-media"
            />
            <CardContent>
              <Typography variant="h6">iPhone</Typography>
              <Typography variant="body2" color="textSecondary">
                Card Description 2
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default WhereToBuy;
