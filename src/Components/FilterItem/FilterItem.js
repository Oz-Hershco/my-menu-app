import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../../Redux/filtersSlice';
import './FilterItem.scss';

export default function FilterItem({ filter }) {

    const filters = useSelector((state) => state.filters.value);
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        const allFiltersId = "52200b61-34eb-4c4b-803c-7017707495ef";
        const value = e.target.checked;

        if (filter.id === allFiltersId) {
            filters.forEach(item => {
                dispatch(updateFilter({
                    id: item.id,
                    selected: !filter.selected
                }));
            });
        } else {
            dispatch(updateFilter({
                id: allFiltersId,
                selected: false
            }));
            dispatch(updateFilter({
                id: filter.id,
                selected: value
            }));
        }


    }

    return (
        <div className={filter.selected ? 'FilterItem  Checked' : 'FilterItem'}>
            <input onChange={handleInputChange} style={{ display: 'none' }} type="checkbox" id={filter.id} name={filter.name} value={filter.name} checked={filter.selected}></input>
            <label className='FilterItem--Label' htmlFor={filter.id}>{filter.name}</label>
        </div>
    );
}
