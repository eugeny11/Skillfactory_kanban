import React, {useState, useContext, Fragment} from 'react'
import { AddCardButton } from '../AddCardButton/AddCardButton'
import { MainContext } from '../MainGoalsContainer/MainGoalsContainer'
import './Goals.css'

export const GoalsToBacklog = () => {
    const {addGoalsBacklog} = useContext(MainContext)

    const [openForm, setOpenForm] = useState(false)
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

    if (!name){
        alert('Введите имя!')
    }

    if (!desc){
        alert('Введите описание!')
    }

    const id = Math.floor(Math.random() * 10000) + 1;
    const date = new Date();
    addGoalsBacklog({id, date:date.toLocaleString(), name, desc})

    setName('')
    setDesc('')
    setOpenForm(false)
    }

    const onNameChange = (e) => {
        setName(e.target.value)
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
                value={name}
                onChange={onNameChange}/>
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