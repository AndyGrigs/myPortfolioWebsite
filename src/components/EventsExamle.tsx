import { useState } from "react"
import React  from 'react'


const EventsExamle = () => {
    const[value, setValue] = useState<string>('')

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)	
    }

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        console.log(value)
        setValue('')
    }


  return (
    <div>
        <h2>Events In Typescript </h2>
        <input value={value} onChange={changeHandler} type="text" />
        <button onClick={handleSubmit}>Click to log out!</button>
    </div>
  )
}

export default EventsExamle