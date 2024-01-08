import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import Child from './Child'

const webname = 'todo list'
const TodoApp = (props) => {
    const [todo, setTodo] = useState([])
    const [updateId, setUpdateId] = useState(null)
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
        if (updateId == null) {
            axios.post('http://localhost:3000/std', { name: addInput.current.value }).then(() => {
                getTodo()
                addInput.current.value = ''
            })
        } else {
            axios.patch(`http://localhost:3000/std/${updateId}`, { name: addInput.current.value }).then(() => {
                getTodo()
                addInput.current.value = ''
                setUpdateId(null)
            })
        }


    }

    const deleteData = (id) => {
        axios.delete(`http://localhost:3000/std/${id}`).then(() => {
            getTodo()
        })
    }


    const editData = (name, id) => {
        addInput.current.value = name
        setUpdateId(id)
    }
    return (
        <>
            <Child name={[props.name]} />
            <input type="text" ref={addInput} /><button onClick={() => {
                addData()
            }}>{updateId == null ? 'Add' : 'Update'}</button>
            {todo.map((result) => {
                return (
                    <>
                        <h1>{result.name}</h1>
                        <button onClick={() => {
                            deleteData(result.id)
                        }}>Delete</button>
                        <button onClick={() => {
                            editData(result.name, result.id)
                        }}>Update</button>
                    </>
                )
            })}
        </>
    )
}

export default TodoApp
