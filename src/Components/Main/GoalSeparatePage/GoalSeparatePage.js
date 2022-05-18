import React, {useState} from 'react'
import X from './x.png'
import {Link, useParams} from 'react-router-dom'
import './GoalSeparatePage.css'

export const GoalSeparatePage = (props) => {

   const {goal, totalGoals, setTotalGoals} = props
   const {goalId} = useParams()
   const [value, setValue] = useState()

   const onSubmit = (e) => {
       e.preventDefault()
       
       setValue('')
   }

   const handleChange = (e) => {
    const newDesc = e.target.value
    const updatedGoals = totalGoals.map(goal => {
     if (goal.id === goalId){
         return {...goal, desc: newDesc}
     } return goal
 })
    setTotalGoals(updatedGoals)     
   }

   console.log(goal)
   console.log(totalGoals)

    return (
        <div className='goal-separate-page'>
            <form className='separate-page-container' submit={onSubmit}>
                <h1 className='goal-title'>{goal.name}</h1>
                <p className='goal-desc'>{goal.desc}</p>
                <input className='goal-input-desc'name='description' value={value} type='text' placeholder='Change description'
                change={handleChange}/>
                <p className='goal-date'>Задача была создана {goal.date}</p>
                <Link to ='/'>
                    <img className='separate-page-close' src={X} alt='' />
                </Link>
                <button type='submit' value='Submit' className='button submit'>Submit changes</button>
            </form>
        </div>

    )
}