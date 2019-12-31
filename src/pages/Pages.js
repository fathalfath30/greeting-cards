/*
//
//  ______    _   _           _  __      _   _     ____   ___
// |  ____|  | | | |         | |/ _|    | | | |   |___ \ / _ \
// | |__ __ _| |_| |__   __ _| | |_ __ _| |_| |__   __) | | | |
// |  __/ _` | __| '_ \ / _` | |  _/ _` | __| '_ \ |__ <| | | |
// | | | (_| | |_| | | | (_| | | || (_| | |_| | | |___) | |_| |
// |_|  \__,_|\__|_| |_|\__,_|_|_| \__,_|\__|_| |_|____/ \___/
//
// Written by Fathalfath30.
// Email : fathalfath30@gmail.com
// Follow me on:
//  Github : https://github.com/fathalfath30
//  Gitlab : https://gitlab.com/Fathalfath30
//
// Licensed under GNU General Public License v3.0
// http://www.gnu.org/licenses/gpl-3.0.txt
//
*/
import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Greeting from "./greeting/Greeting";
import Home from "./home/Home";

const error404 = class Error404 extends React.Component {
  render () {
    return (<p>Page not found</p>)
  }
};

export default class Pages extends React.Component {
  /*constructor (p) {
    super (p);
    //const bodyTag = document.getElementsByTagName ("body")[0];
  }*/

  render () {
    return (
      <Router>
        <Switch basename={'/ucapan'}>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
          <Route path={`${process.env.PUBLIC_URL}/greeting`} component={Greeting} />
          <Route component={error404} />
        </Switch>
      </Router>
    )
  }
}
