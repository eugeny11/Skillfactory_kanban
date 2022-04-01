import React, {useState, Fragment} from 'react'
import { AddCardButton } from '../AddCardButton/AddCardButton'
import { DropDown } from '../DropDown/DropDown'
import './Goals.css'

export const Goals = ({listOfDropDownGoals, addGoals}) => {
    const [openForm, SetOpenForm] = useState(false)
    const [chosenGoal, SetChosenGoal] = useState(null)
    const [chosenId, SetChosenId] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (chosenId !== undefined && chosenId !== ''){
            addGoals(chosenId)
            SetOpenForm(false)
            SetChosenId('')
            SetChosenGoal(null)
        }
        else {alert('Вы ничего не выбрали!')}
    }

    return(
        <Fragment>
            {openForm && (
                <form className='goal-form' onSubmit={onSubmit}>
                    <DropDown 
                    listOfDropDownGoals={listOfDropDownGoals}
                    chosenGoal={chosenGoal}
                    SetChosenGoal={SetChosenGoal}
                    chosenId={chosenId}
                    SetChosenId={SetChosenId}
                    />
                    <button type='submit'
                    value='Submit' 
                    class='button submit'/>
                </form>
            )}
            {listOfDropDownGoals && listOfDropDownGoals.length > 0 ? (
              <Fragment>{!openForm && <AddCardButton setOpenForm={SetOpenForm} />}</Fragment>
            ) : (
                <div className='no-cards'>Пока добавить нечего</div>
            )}
        </Fragment>
    )
}