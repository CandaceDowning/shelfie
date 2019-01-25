import React from "react";
import {Switch, Route} from 'react-router-dom';
import Dash from "./components/Dash/Dash";
import Form from './components/Form/Form';

export default (
    <Switch>
        <Route component={Dash} exact path="/"/>
        <Route component={Form} path="/add"/>
        {/* <Route component={Form} path="/edit/:id"/>        */}
    </Switch>
)