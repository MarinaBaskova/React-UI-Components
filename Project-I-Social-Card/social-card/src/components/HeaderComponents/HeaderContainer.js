import React from 'react';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import './Header.css';

const HeaderContainer = () => {
    return (
        <div className="headerCard">
            <div className="topHeaderText">
                <ImageThumbnail />
                <HeaderTitle />
            </div>
            <HeaderContent />
        </div>
    )
};

export default HeaderContainer;

