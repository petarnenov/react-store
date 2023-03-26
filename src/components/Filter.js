import React, { useCallback, useImperativeHandle } from 'react'
import Checkbox from './Checkbox'
import Label from './Label'
import store from './store/store'

const Filter = React.forwardRef(({ filterId }, ref) => {

    const save = useCallback(({ id }) => {
        console.log(`call save outsideFilter id:${id} `, store.getState()[filterId] || {})
    }, [filterId])

    useImperativeHandle(ref, () => ({
        save({ id }) {
            return save({ id });
        }
    }))

    return (
        <>
            <h2>Filter</h2>
            <form id={filterId} className={"filter-form"}>
                <Checkbox storeId={filterId} id="title" name="title" label="Title" />
                <Label htmlFor="title">Title</Label>
                <Checkbox storeId={filterId} id="description" name="description" label="Description" />
                <Label htmlFor="description">Description</Label>
                <Checkbox storeId={filterId} id="company" name="company" label="Company" />
                <Label htmlFor="company">Company</Label>
                <Checkbox storeId={filterId} id="location" name="location" label="Location" />
                <Label htmlFor="location">Location</Label>
                <Checkbox storeId={filterId} id="salary" name="salary" label="Salary" />
                <Label htmlFor="salary">Salary</Label>
                <Checkbox storeId={filterId} id="equity" name="equity" label="Equity" />
                <Label htmlFor="equity">Equity</Label>
            </form>
        </>
    )
}
)

export default Filter