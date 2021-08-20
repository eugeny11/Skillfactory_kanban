import React, {useState, useContext, Fragment} from 'react'
import { AddCardButton } from '../AddCardButton/AddCardButton'
import { MainContext } from '../MainGoalsContainer/MainGoalsContainer'
import {v4 as uuidv4} from 'uuid'
import './Goals.css'

export const GoalsToBacklog = () => {
    const {addGoalsBacklog} = useContext(MainContext)

    const [openForm, setOpenForm] = useState(false)
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

    if (!title){
        alert('Введите имя!')
    }

    if (!desc){
        alert('Введите описание!')
    }

    const id = uuidv4()
    let date = new Date()
    addGoalsBacklog({id, date:date.toLocaleString(), title, desc})

    setTitle = ''
    setDesc = ''
    setOpenForm= 'false'
    }

    const onTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const onDescChange = (e) => {
        setDesc(e.target.value)
    }

    return(
        <Fragment>
            {openForm ? (
                <form className='goal-form' onSubmit={onSubmit}>
                <h3 className='add-backlog-goal-headline'>Добавьте задачу</h3>
                <input className='add-goal-form'
                type='text'
                placeholder='Введите название задачи'
                value={title}
                onChange={onTitleChange}/>
                <input className='add-goal-form'
                type='text'
                placeholder='Введите описание задачи'
                value={desc}
                onChange={onDescChange}/>
                <input type='submit' value='Submit' className='button submit'/>
                </form>
                
            ):(
                <AddCardButton setOpenForm={setOpenForm}/>
            )}
        </Fragment>
    )

    
}