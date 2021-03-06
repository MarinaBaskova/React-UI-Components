import React from 'react';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import './Header.css';

const HeaderContainer = () => {
    return (
        <div className="headerCard">
            <ImageThumbnail />
            <div className="topHeaderText">
                <HeaderTitle />
                <HeaderContent />
            </div>

        </div>
    )
};

export default HeaderContainer;

