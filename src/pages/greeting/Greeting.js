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
import "./Greeting.css"
import logo from "../../asset/images/logo_ubl.png"
import jQuery from "jquery/dist/jquery.min"

export default class Greeting extends React.Component {
  constructor (p) {
    super (p);
    document.getElementsByTagName ("body")[0]
      .classList.add ('body-greeting');
  }

  componentDidMount () {
    jQuery ('#selimut-biru').fadeOut (700);
  }

  render () {
    return (
      <div className='container col-lg-7'>
        <div id='selimut-biru' className='selimut-biru'>&nbsp;</div>
        <div className='greeting-pages'>
          <div className='header'>
            <div className='col-lg-12 text-center'>
              <img src={logo} width='80' />
            </div>
            <div className='col-lg-12 text-center'>
              Yayasan Pendidikan Budi Luhur Cakti
            </div>
          </div>
        </div>
      </div>
    );
  }
}
