import React from 'react';
import { useSelector } from 'react-redux';
import MenuItem from '../MenuItem/MenuItem';
import './MenuItems.scss';

export default function MenuItems() {

    const items = useSelector((state) => state.items.value);

    return (
        <div className='MenuItems'>
            {
                items.map((item) => {
                    return <MenuItem key={item.id} item={item} />
                })
            }
        </div>
    );
}
