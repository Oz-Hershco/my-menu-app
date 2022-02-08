import React from 'react';
import { useSelector } from 'react-redux';
import FilterItem from '../FilterItem/FilterItem';
import './MenuFilters.scss';

export default function MenuFilters() {

    const filters = useSelector((state) => state.filters.value);

    return (
        <div className='MenuFilters'>
            {
                filters.map((filter) => {
                    return <FilterItem filter={filter} key={filter.id} />
                })
            }
        </div>
    );
}
