
import React from "react";
import {Profile, Skills, Contact, Experience, Projects} from "../containers"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function MyRouter(){
    return(
        <Router>
            <Switch>
            <Route exact path = "/" component = {Profile}/>
            <Route exact path = "/Skills" component = {Skills}/>
            <Route exact path = "/contact" component = {Contact}  />
            <Route exact path = "/experience" component = {Experience}  />
            <Route exact path = "/projects" component = {Projects}  />
            </Switch>
        </Router>
    )
}
export default MyRouter;