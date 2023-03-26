import React, { useImperativeHandle } from 'react'

const FakeFilter = React.forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({
        save() {
            console.log("FakeFilter save")
        }
    }))

    return (
        <div>FakeFilter</div>
    )
})

export default FakeFilter
