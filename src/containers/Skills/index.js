import Card from "../../components/card"
import "./css/style.css"
import Navbar from "../../components/navbar"
import { Grid } from "@mui/material"
export default function Skills() {
    return(
      <>
      <Navbar title="Skills"/>
      <Grid container lg={10} margin="0 auto"  justifyContent="space-around">

        {/* <div className = "p-4 cards_div"> */}
        <Card 
        Discription="I Am Professional And Skillful In Html And Can Build Structure Of Any Type" 
        image = "https://cdn.worldvectorlogo.com/logos/html-1.svg"
        name = "HTML"
        />
        <Card 
        Discription="I Am Professional And Skillful In CSS And Can Build Ausome And Interactive UserInterfaces." 
        image = "https://w7.pngwing.com/pngs/509/571/png-transparent-cascading-style-sheets-logo-css3-html-web-development-world-wide-web-blue-angle-web-design.png"
        name = "CSS"
        />
          <Card 
        Discription="
        JavaScript is a cross-platform, object-oriented scripting language used to make webpages interactive." 
        image = "https://w1.pngwing.com/pngs/951/574/png-transparent-react-logo-javascript-redux-vuejs-angular-angularjs-expressjs-front-and-back-ends.png"
        name = "JavaScript"
        />
        <Card 
        Discription="
        JavaScript is a cross-platform, object-oriented scripting language used to make webpages interactive." 
        image = "https://cdn.iconscout.com/icon/free/png-256/firebase-3521427-2944871.png"
        name = "React"
        />
             <Card 
        Discription="
        JavaScript is a cross-platform, object-oriented scripting language used to make webpages interactive." 
        image = "data:image/png;base64,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"
        name = "React"
        />
                    <Card 
        Discription="
        JavaScript is a cross-platform, object-oriented scripting language used to make webpages interactive." 
        image = "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
        name = "GitHub"
        />
        {/* </div> */}
        </Grid>
        </>
    )
}