import React from 'react'
import { Goals } from '../Goals/Goals.js'
import { GoalsToBacklog } from '../Goals/GoalsToBacklog'
import {Link} from 'react-router-dom'
import './GoalsContainer.css'

export const GoalsContainer = ({headline, children, listOfDropDownGoals, addGoals}) => {
    return(
        <div className='goals-container'>
            <h2 className='goals-container-headline'>{headline}</h2>
            <div className='goals-form'>
                {children && children.length > 0 && (
                    <ul className='goals'>
                        {children.map((goal) => {
                            return(
                                <Link className='goal' to={`goals/${goal.id}`}>
                                    <li key={goal.id}>{goal.name}</li>
                                </Link>
                            )
                        })}
                    </ul>
                )}
                {headline === 'Backlog' ? (
                    <GoalsToBacklog />
                ):(
                    <Goals 
                    listOfDropDownGoals={listOfDropDownGoals}
                    addGoals={addGoals}/>
                )}
            </div>
        </div>
    )
}