import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid
} from "@mui/material";
import "../containers/index.css";
import img from "../../assets/img1.jpg";

const Deals = () => {
  return (
    <Box>
      <Container sx={{ pt: 5 }} className="abc">
        <Typography variant="h4" sx={{ textAlign: "center", color: "black" }}>
          Best Deals
        </Typography>
        <Grid container spacing={2}>
          <Grid item lg={3}>
            <Card sx={{ display: "flex" }}>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={img}
                alt="Live from space album cover"
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    Live From Space
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Mac Miller
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
          <Grid item lg={3}>
            <Card sx={{ display: "flex" }}>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={img}
                alt="Live from space album cover"
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    Live From Space
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Mac Miller
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
          <Grid item lg={3}>
            <Card sx={{ display: "flex" }}>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={img}
                alt="Live from space album cover"
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    Live From Space
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Mac Miller
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
          <Grid item lg={3}>
            <Card sx={{ display: "flex" }}>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={img}
                alt="Live from space album cover"
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    Live From Space
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Mac Miller
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Deals;
