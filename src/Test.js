import React, { useEffect, useState } from 'react'

const Test = () => {
    const [cnt, setCnt] = useState(0)
    const [addData, setData] = useState('hii')
    useEffect(() => {
        console.log('hii hello');
        let color = ['red', 'green', 'blue', 'purple', 'yellow', 'pink']
        document.body.style.backgroundColor = color[cnt]

    }, [cnt])


    const increement = () => {
        setCnt(cnt + 1)
    }

    const changeValue = () => {
        setData('hello')
        document.getElementById('text').style.color = 'red'
    }
    return <>
        <h1>{cnt}</h1>
        <h2 id='text' onClick={() => {
            changeValue()
        }}>{addData}</h2>
        <button onClick={() => {
            increement()
        }}>Increement</button>
    </>
}

export default Test
