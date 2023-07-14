import {
  Container,
  Box,
  Typography,
  Tab,
  Tabs,
  Card,
  Grid,
  CardMedia,
} from "@mui/material";
import React from "react";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// CustomTabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Categories = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box>
        <Container sx={{ pt: 20 }}>
          <Typography variant="h3" sx={{ textAlign: "center" }}>
            Popular Categories
          </Typography>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Item One" {...a11yProps(0)} />
              <Tab label="Item Two" {...a11yProps(1)} />
              <Tab label="Item Three" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Grid container spacing={2}>
              <Grid item lg={3}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="green iguana"
                  />
                </Card>
                <Box sx={{ mt: 4 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Rose Hotel
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis ante ex, blandit ut odio eget, sodales pulvinar mi.
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={3}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="green iguana"
                  />
                </Card>
                <Box sx={{ mt: 4 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Rose Hotel
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis ante ex, blandit ut odio eget, sodales pulvinar mi.
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={3}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="green iguana"
                  />
                </Card>
                <Box sx={{ mt: 4 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Rose Hotel
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis ante ex, blandit ut odio eget, sodales pulvinar mi.
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={3}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="green iguana"
                  />
                </Card>
                <Box sx={{ mt: 4 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Rose Hotel
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis ante ex, blandit ut odio eget, sodales pulvinar mi.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}></CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Item Three
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            Item Three
          </CustomTabPanel>
        </Container>
      </Box>
    </div>
  );
};

export default Categories;
