import React from 'react';
import {Route,Switch} from 'react-router-dom'
import About from './About';
import Contact from './Contact';
import Skill from './Skills';
import Project from './Project';
import Log from './Log';



import './index.css'
import Menu from './Menu';




const App=()=>{
    return(
        <>
        <Menu/>
        <Switch>
        <Route exact path="/" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/skill" component={Skill}/>
        <Route exact path="/project" component={Project}/>
        <Route path ="/log" component={Log}/>
        
        </Switch>
        
        </>
    )
}
export default App;
