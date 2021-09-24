import Navbar from "../../components/navbar";
import { Grid } from "@mui/material";
export default function Experience(params) {
  return (
    <>
      <Navbar title="Experience" />
      <Grid container margin="0 auto" columnSpacing={10}>
        <Grid  item lg={4} md={4} sm={12}>
          <h1>Experience</h1>
          <p>I dont Have Any Professional Experience</p>
        </Grid>
      </Grid>
    </>
  );
}
