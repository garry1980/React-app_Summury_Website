import React from 'react';

// Components

// Style
import './Social.scss';

const Social = ({socialImg, link}) => {
    return (
        <a href={link} className="social" target="_blank"> 
           <img src={`/img/svg/${socialImg}.svg`} alt="" className="social-img" rel="noopener noreferrer" />
        </a>
    );
}

export default Social;