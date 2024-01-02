import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
const TodoApp = () => {
    const [todo, setTodo] = useState([])
    const addInput = useRef('')
    useEffect(() => {
        getTodo()
    }, [])

    const getTodo = () => {
        axios.get("http://localhost:3000/std").then((res) => {
            setTodo(res.data)
        })
    }
    const addData = () => {
        axios.post('http://localhost:3000/std', { name: addInput.current.value }).then(() => {
            getTodo()
            addInput.current.value = ''
        })
    }

    const deleteData = (id) => {
        axios.delete(`http://localhost:3000/std/${id}`).then(() => {
        })
    }
    return (
        <>
            <input type="text" ref={addInput} /><button onClick={() => {
                addData()
            }}>Add</button>
            {todo.map((result) => {
                return (
                    <>   
                        <h1>{result.name}</h1>
                        <button onClick={() => {
                            deleteData(result.id)
                        }}>Delete</button>
                    </>
                )
            })}
        </>
    )
}

export default TodoApp
