import React from 'react'

import Label from './Label';
import TextInput from './TextInput';
import store from './store/store';

const JobForm = ({ storeId }) => {

    const handleReset = (e) => {
        store.setState({
            ...store.getState(),
            [storeId]: {}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitting form', store.getState())
        handleReset(e)
    }

    return (
        <div>
            <h2>Job Form {storeId}</h2>
            <form className="job_form">
                <Label htmlFor="title">Title</Label>
                <TextInput id="title" name="title" storeId={storeId} />
                <Label htmlFor="description">Description</Label>
                <TextInput id="description" name="description" storeId={storeId} />
                <Label htmlFor="company">Company</Label>
                <TextInput id="company" name="company" storeId={storeId} />
                <Label htmlFor="location">Location</Label>
                <TextInput id="location" name="location" storeId={storeId} />
                <Label htmlFor="salary">Salary</Label>
                <TextInput id="salary" name="salary" storeId={storeId} />
                <Label htmlFor="equity">Equity</Label>
                <TextInput id="equity" name="equity" storeId={storeId} />
                <button type="submit" onClick={handleSubmit}>Submit</button>
                <button type="reset" onClick={handleReset}>Reset</button>
            </form>
        </div>
    )
}

export default JobForm