import Navbar from "../../components/navbar";
import { Grid } from "@mui/material";
import OutlinedCard from "../../components/pcard";
export default function Projects(params) {
  return (
    <>
      <Navbar title="Projects" />
      <Grid lg={10} container margin="0 auto" columnSpacing={10} justifyContent="space-around">
        <OutlinedCard
          name="calculator"
          cust="HTML, CSS, Javascript"
          des="I Made a Calculator With key Click"
          github="https://github.com/Malik-Umair-khalid/New-Calculator.git"
        />
        <OutlinedCard
          name="Drum Kit"
          cust="HTML, CSS, Javascript"
          des="I Made a Drum Kit With JavaScript"
          github="https://github.com/Malik-Umair-khalid/Drum-Kit-Javascript.git"
        />
        <OutlinedCard
          name="Quiz App"
          cust="HTML, CSS, Javascript"
          des="I Made a Quiz App With JavaScript"
          github="https://github.com/Malik-Umair-khalid/Umair-Quiz-App.git"
        />
        <OutlinedCard
          name="Food App"
          cust="HTML, CSS, Javascript"
          des="I Made a Food App With JavaScript"
          github="https://github.com/Malik-Umair-khalid/hackathon.git"
        />
        <OutlinedCard
          name="React Todo App"
          cust="React"
          des="I Made a Tofo With React"
          github="https://github.com/Malik-Umair-khalid/React-Todo-app.git"
        />
        <OutlinedCard
          name="React Todo App"
          cust="React"
          des="I Made a Tofo With React"
          github="https://github.com/Malik-Umair-khalid/React-Todo-app.git"
        />
        
        
        
      </Grid>
    </>
  );
}
