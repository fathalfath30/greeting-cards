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
import logo from '../../asset/images/logo_ubl_wtext.png';
import './Home.css';
//import qs, {parse} from 'query-string';
import objectToQueryParam from "../../helper/objectToQueryParam"

export default class Home extends React.Component {
  //Montserrat = null;

  constructor (p) {
    super (p);
    this.state = {
      name: '',
      type: 'ny'
    };

    this.submitForm = this.submitForm.bind (this);
    this.handleChange = this.handleChange.bind (this);
  }

  handleChange (event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState ({
      [target.name]: value
    });
  }

  submitForm () {
    document.location = `${process.env.PUBLIC_URL}/greeting?` + objectToQueryParam ({
      't': this.state.type,
      'n': this.state.name
    });
  }

  render () {
    return (
      <div className='container d-flex h-100 w-100 align-items-center'>
        <div className='card greeting col-lg-6'>
          <img src={logo} className="card-img-top" alt="Logo Budi Luhur" />
          <div className='card-body col-lg-12'>
            <div className='col-lg-12 greeting-header '>
              Buat Kartu Ucapan Anda Dalam Hitungan Menit
            </div>
            <div className='col-lg-12'>
              <hr />
            </div>
            <div className='col-lg-12 greeting-content'>
              <div className='form-group'>
                <input className='form-control' placeholder='Masukan nama'
                       name='name' value={this.state.name} onChange={this.handleChange} />
              </div>
              <div className='form-group'>
                <select className='form-control' value={this.state.type} onChange={this.handleChange}>
                  <option value='ny'>Tahun Baru</option>
                </select>
              </div>
            </div>
            <div className='col-lg-12 greeting-footer'>
              <button type='button' className='btn btn-primary btn-submit col-lg-12' onClick={this.submitForm}>
                Buat ucapan
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
