import React from 'react';
import './Header.css';
import logo from './logo.png'


const ImageThumbnail = () => {
        return (<div className="logo"><img className="logoImage" alt="lambda logo" src={logo}></img></div>);
}

export default ImageThumbnail;