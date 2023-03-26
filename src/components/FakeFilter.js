import React, { useImperativeHandle } from 'react'

const FakeFilter = React.forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({
        save() {
            console.log("FakeFilter save")
        }
    }))

    return (
        <h2 className='filter-form'>FakeFilter</h2>
    )
})

export default FakeFilter
