import React from 'react'
import X from './x.png'
import {Link} from 'react-router-dom'
import './GoalSeparatePage.css'

export const GoalSeparatePage = ({goal}) => {
    return (
        <div className='goal-separate-page'>
            <div className='separate-page-container'>
                <h1 className='goal-title'>{goal.name}</h1>
                <p className='goal-desc'>{goal.desc}</p>
                <p className='goal-date'>Задача была создана {goal.date}</p>
                <Link to ='/'>
                    <img className='separate-page-close' src={X} alt='' />
                </Link>
            </div>
        </div>

    )
}