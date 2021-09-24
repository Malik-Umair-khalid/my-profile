import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard(props) {
  return (
    <Card sx={{ minWidth: 275, mb: 10 }}>
      <CardContent>
            <Typography variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.cust}
        </Typography>
        <Typography variant="body2">
          {props.des}
        </Typography>
      </CardContent>
      <CardActions>
          <a href={props.github} target = "_blank">
            <Button size="small">Github</Button>      
          </a>
      </CardActions>
    </Card>
  );
}
