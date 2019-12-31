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
import tahun2020 from "../../asset/images/design_2020.png"
import qs from 'query-string';
import ReactAudioPlayer from 'react-audio-player';


export default class Greeting extends React.Component {
  name = '';
  url = '';

  constructor (p) {
    super (p);
    document.getElementsByTagName ("body")[0]
      .classList.add ('body-greeting');
    const query = qs.parse (this.props.location.search);
    this.name = query.n;

    //console.log (window.location.origin);
    //console.log (window.location.href)
  }

  /*copyUrl () {
    var text = document.createElement ("textarea");
    text.innerHTML = window.location.href;
    var Copied = text.createTextRange ();
    Copied.execCommand ("Copy");
  }*/

  componentDidMount () {
    jQuery ('#selimut-biru').fadeOut (700);
    //jQuery ('#selimut-putih').attr ('style', 'height:120px !important');
    //document.getElementById("audio-player").play();
    /*let audio = document.createElement ("audio");
    //audio.setAttribute ('autoplay', '');
    audio.setAttribute ('loop', '');
//
    audio.setAttribute ('id', 'audiobg');
    // <source src='https://budiluhur.ac.id/ucapan/music1.mp3' type="audio/mp3" />
    let audio_src = document.createElement ("source");
    audio_src.setAttribute ('src', 'https://budiluhur.ac.id/ucapan/music1.mp3');
    audio_src.setAttribute ('type', 'audio/mp3');

    audio.appendChild (audio_src);
    document.getElementById ("root").appendChild (audio);

    let button = document.createElement ("button");
    button.setAttribute ('id', 'playMusic');
    button.setAttribute ('style', 'display:none;');
    button.setAttribute ("onclick", 'document.getElementById("audiobg").play()');
    /!*jQuery ("#playMusic").on ('click', function () {
      jQuery ("#audiobg").play ();
      alert('eyy');
    });*!/

    document.getElementById ("root").appendChild (button);
    jQuery ("#playMusic").trigger ('click')*/
    //this.playOnClick();
    //jQuery('#play').attr('style','display:hidden');
  }

  /*playOnClick () {
    document.getElementById("audio-player").play();
    //document.location = 'www.google.com';
  }*/

  render () {
    return (
      <div>
        <div id='selimut-biru' className='selimut-biru'>&nbsp;</div>
        <div className='container container-mantap col-lg-7 mt-0 p-0'>
          {/*<div id='selimut-putih' className='selimut-putih col-lg-12'>&nbsp;</div>*/}
          <div className='greeting-pages p-5 pb-0'>
            <div className='header'>
              <div className='col-lg-12 text-center'>
                <img src={logo} width='80' alt='logo budi luhur' />
              </div>
              <div className='col-lg-12 text-center'>
                Yayasan Pendidikan Budi Luhur Cakti
              </div>
            </div>
            <div className='col-lg-12 text-center mt-5 name-card'>
              {this.name}
            </div>
            <div className='col-lg-12 text-center mt-5 mengucapkan'>
              Mengucapkan
            </div>
            <div className='col-lg-12 text-center mt-5 tahun-baru'>
              Selamat Tahun Baru
            </div>
            <div className='col-lg-12 text-center tahun2020'>
              <img src={tahun2020} className='col-lg-10' alt='logo budi luhur' />
            </div>
            {/*<div className='col-lg-12 text-center mt-5'>
              <a href='#' className='btn btn-primary col-lg-5' onClick={this.copyUrl}>Copy Url</a>
            </div>*/}
          </div>
        </div>
        {/*<audio autoPlay={false} loop id='audio-player'>
          <source src='https://budiluhur.ac.id/ucapan/music1.mp3' type="audio/mp3" />
        </audio>*/}
        {/*<button type='button' id='play' onClick={this.playOnClick}>&nbsp;</button>*/}
        <ReactAudioPlayer
          src="https://budiluhur.ac.id/ucapan/music1.mp3"
          autoPlay
          control
        />
      </div>
    );
  }
}
