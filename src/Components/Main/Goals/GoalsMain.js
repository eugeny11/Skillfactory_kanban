import React from 'react'
import { GoalsContainer } from '../GoalsContainer/GoalsContainer'
import './Goals.css'

export const GoalsMain = ({values}) => {
    return(
        <div className='goals-main-container'>
            <GoalsContainer headline='Backlog'>
                {values.GoalsBacklog}
            </GoalsContainer>
            <GoalsContainer headline='Ready'
            listOfDropDownGoals={values.GoalsBacklog}
            addGoals={values.addReadyGoals}>
                {values.GoalsReady}
            </GoalsContainer>
            <GoalsContainer
            headline='In Progress'
            listOfDropDownGoals={values.GoalsReady}
            addGoals={values.addProgressGoals}>
                {values.GoalsProgress}
            </GoalsContainer>
            <GoalsContainer
            headline='Finished'
            listOfDropDownGoals={values.GoalsProgress}
            addGoals={values.addFinishedGoals}>
                {values.GoalsFinished}
            </GoalsContainer>
        </div>
    )
}