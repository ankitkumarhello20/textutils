import React from 'react';
// type impt 
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (                                     //change light to dark for dark theme
    <nav className={` navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/home">
                {props.aboutText}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
          </li>
          
        </ul>
        {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          {/* in bootstrap success is green primary is blue danger is red  if we remove outline outline will be removed */}
          {/* <button className="btn btn-outline-primary" type="submit">Search</button>
        </form> */}                            {/*text-light class of bootstrap to make text white*/}
                    <div class={`form-check form-switch text-${props.mode=='light'? 'dark':'light'}`}>
          <input class="form-check-input" onClick={props.toggleMode}type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label class="form-check-label" for="flexSwitchCheckDefault">Enable Dark light</label>
        </div>
      
      </div>
    </div>
  </nav>
  );
}
// prop can have value as string ,number, objects even 
// this is check passing prop should be string(can be array or something else) otherwise it would throw error
Navbar.propTypes = {
    title: PropTypes.string.isRequired, //isRequired make this should be mandatory throw error if not set and default values of props are not set
    aboutText: PropTypes.string
}
// default value is set if nothing is set props will take this value 
Navbar.defaultProps ={
    title: "textutils",
    aboutText: "Home"
}