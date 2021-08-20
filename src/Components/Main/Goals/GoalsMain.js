import React from 'react'
import { GoalsContainer } from '../GoalsContainer/GoalsContainer'
import './Goals.css'

export const GoalsMain = ({properties}) => {
    return(
        <div className='goals-main-container'>
            <GoalsContainer headline='Backlog'>
                {properties.GoalsBacklog}
            </GoalsContainer>
            <GoalsContainer headline='Ready'
            listOfDropDownGoals={properties.GoalsBacklog}
            addGoals={properties.addReadyGoals}>
                {properties.GoalsReady}
            </GoalsContainer>
            <GoalsContainer
            headline='In Progress'
            listOfDropDownGoals={properties.GoalsReady}
            addGoals={properties.addProgressGoals}>
                {properties.GoalsProgress}
            </GoalsContainer>
            <GoalsContainer
            headline='Finished'
            listOfDropDownGoals={properties.GoalsProgress}
            addGoals={properties.addFinishedGoals}>
                {properties.GoalsFinished}
            </GoalsContainer>
        </div>
    )
}