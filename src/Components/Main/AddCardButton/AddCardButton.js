import React from 'react'
import './AddCardButton.css'

export const AddCardButton = ({setOpenForm}) => {
    const addCard = (e) => {
        e.preventDefault()
        setOpenForm(true)
    }

    return(
        <button className='button add-card' onClick={addCard}>
            + Add card
        </button>
    )
    
}