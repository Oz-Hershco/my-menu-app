import React from 'react';
import './MenuItem.scss';

export default function MenuItem({ item }) {
    return (
        <div className='MenuItem'>
            <img className='MenuItem--Img' src={item.img} alt="food item" />
            <div className='MenuItem--Content'>
                <div className='MenuItem--ContentHeader'>
                    <p className='MenuItem--Title'>{item.title}</p>
                    <p className='MenuItem--Price'>{item.price}</p>
                </div>
                <p className='MenuItem--Description'>{item.description}</p>
            </div>
        </div>
    );
}
