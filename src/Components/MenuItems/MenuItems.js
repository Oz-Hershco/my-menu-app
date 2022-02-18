import React from 'react';
import { useSelector } from 'react-redux';
import CategorySection from '../CategorySection/CategorySection';
import MenuItem from '../MenuItem/MenuItem';
import './MenuItems.scss';

export default function MenuItems() {

    const items = useSelector((state) => state.items.value);
    const filters = useSelector((state) => state.filters.value);
    const isFilterAllActive = filters.find((filter) => filter.selected && filter.id === "52200b61-34eb-4c4b-803c-7017707495ef");
    return (
        <div className='MenuItems'>
            {
                filters.filter((filter) => (filter.selected || isFilterAllActive) && filter.id !== "52200b61-34eb-4c4b-803c-7017707495ef").map((filter) => {
                    return (
                        <CategorySection key={filter.id} title={filter.name}>
                            {
                                items.filter((item) => item.type.id === filter.id).map((item) => {
                                    return <MenuItem key={item.id} item={item} />
                                })
                            }
                        </CategorySection>
                    )
                })
            }
            {
                // items.filter((item) => {
                //     const isAllActive = filters.find((filter) => filter.selected && filter.id === "52200b61-34eb-4c4b-803c-7017707495ef");
                //     if (isAllActive || !filters.filter((filter) => filter.selected).length) {
                //         return item;
                //     }
                //     const isItemSelected = filters.find((filter) => filter.selected && filter.id === item.type.id && filter.id !== "52200b61-34eb-4c4b-803c-7017707495ef");
                //     return isItemSelected;
                // }).map((item) => {
                //     return <MenuItem key={item.id} item={item} />
                // })
            }
        </div>
    );
}
