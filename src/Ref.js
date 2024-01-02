import React, { useRef } from 'react'

function Ref() {
    const input = useRef(null)

    const changeSubmit = () => {
        // console.log(document.getElementById('input').value);
        console.log(input.current);



    }
    return <>
        <input type="text" id='input' ref={input} />
        <button onClick={() => {
            changeSubmit()
        }}>Submit</button>
    </>
}

export default Ref
