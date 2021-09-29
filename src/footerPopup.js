import React from 'react';
import ReactDOM from 'react-dom';

const FooterPopup = (props) => {
    const {popupText} = props;
    return (
        ReactDOM.createPortal(
            <div className="footer-popup-wrapper">
                <h6 className="footer-popup-text">Copied to clipboard! - {popupText}</h6>
            </div>
        , document.getElementById("footer-popup"))
    );
}

export default FooterPopup;
