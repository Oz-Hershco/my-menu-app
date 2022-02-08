import React, { useEffect, useState } from 'react';
import './FilterItem.scss';

export default function FilterItem({ filter }) {

    const [isFlitered, setIsFlitered] = useState(false);

    useEffect(() => {
        if (filter.id === '52200b61-34eb-4c4b-803c-7017707495ef') {
            setIsFlitered(true);
        }
        return () => {
        };
    }, []);


    const handleInputChange = (e) => {
        const value = e.target.checked;
        setIsFlitered(value);
    }

    return (
        <div className={isFlitered ? 'FilterItem  Checked' : 'FilterItem'}>
            <input onChange={handleInputChange} style={{ display: 'none' }} type="checkbox" id={filter.id} name={filter.name} value={filter.name} checked={isFlitered}></input>
            <label className='FilterItem--Label' htmlFor={filter.id}>{filter.name}</label>
        </div>
    );
}
