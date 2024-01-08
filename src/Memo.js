import React, { useMemo, useState } from 'react'

const Memo = () => {
    const [count, setCount] = useState(1)
    const [item, setItem] = useState(1)

    const inc = () => {
        setCount(count + 1)
    }

    // const callMalti = () => {
    //     return item * count
    // }

    const callMalti = useMemo(() => {
        return item * count
    }, [item])

    return <>
        <h1>{count}</h1>
        <button onClick={() => {
            inc()
        }}>Increment</button>
        <h1>  {item}</h1>
        <button onClick={() => {
            setItem(item * 10)
        }}>multi</button>
        <h1>{callMalti}</h1>
    </>
}

export default Memo
