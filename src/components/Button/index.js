import React, { useState } from 'react';
import '../../assets/Css/button.css';
import {NotificationManager, NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import 'font-awesome/css/font-awesome.min.css';

const Button = (props) => {

    const handleCart = () => {
        NotificationManager.info("is added to cart","",1000);  
    }

    const handleBook = () => {
        NotificationManager.info("is bookmarked","",1000);
    }

    return (
        <>
            <div className='container'>
                <div className='cart-button'>
                    <button onClick={handleCart}>ADD TO CARD</button>
                </div>
                <div className="book-button">
                    <button onClick={handleBook}><i className='fa fa-bookmark'></i></button>
                </div>
            <NotificationContainer/>
            </div>
        </>
    );
};

export default Button;