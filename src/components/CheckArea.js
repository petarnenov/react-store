import React from 'react'
import { Outlet } from 'react-router-dom';
import { useStore } from './store/store'

const CheckArea = () => {
    const state = useStore();
    console.log("state", state)
    return (
        <div>
            <Outlet />
            <h2>Check Area</h2>
            <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
    )
}

export default CheckArea
