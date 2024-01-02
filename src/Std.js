import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Std = () => {
    const [std, setStd] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/std').then((res) => {
            console.log(res.data)
            setStd(res.data)
        })
    }, [])

    return <>
        <table>
            <tr>
                <td>Name</td>
                <td>Age</td>
                <td>Marks</td>
            </tr>

            {std.map((result) => {
                return (
                    <tr>
                        <td>{result.name}</td>
                        <td>{result.age}</td>
                        <td>{result.marks}</td>
                    </tr>
                )
            })}
        </table>
    </>
}

export default Std
