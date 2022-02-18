import React from 'react'
import './CategorySection.scss';

export default function CategorySection({ title, style = {}, children }) {
    return (
        (
            <div style={style} className='CategorySection'>
                <p className='CategorySection--Title'>{title}</p>
                <div className='CategorySection--Container'>
                    {children}
                </div>
            </div>
        )
    )
}
