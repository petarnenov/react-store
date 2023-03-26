import React from 'react'
import store from './store/store';
import { useStore } from './store/store';

const Checkbox = ({ name, storeId }) => {
    const checked = useStore((state) => state?.[storeId]?.[name]) || false;
    const handleOnChange = (e) => {
        const { name, checked } = e.target;
        //current state
        const state = store.getState();
        //new state
        store.setState({
            ...state,
            [storeId]: {
                ...state[storeId],
                [name]: checked
            }
        })
    }

    return (
        <input type="checkbox" onChange={handleOnChange} checked={checked} name={name} />
    )
}

export default Checkbox