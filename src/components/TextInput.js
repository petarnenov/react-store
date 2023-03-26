import React from 'react'
import store, { useStore } from './store/store'

const TextInput = ({ id, name, storeId }) => {
    const value = useStore((state) => state?.[storeId]?.[name]) || '';
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        //current state
        const state = store.getState();
        //new state
        store.setState({
            ...state,
            [storeId]: {
                ...state[storeId],
                [name]: value
            }
        })
    }

    return (
        <input type="text" id={id} name={name} value={value} onChange={handleOnChange} />
    )
}

export default TextInput