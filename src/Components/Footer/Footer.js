import React from 'react'
import './Footer.css'

const Footer = ({countOfActiveGoals,countOfFinishedGoals}) => {
    return(
        <footer className='footer'>
            <div className='content_of_footer container'>
                <section className='goals_of_footer'>
                    <p className='footer__goal'>Активные задачи: {countOfActiveGoals}</p>
                    <p className='footer__goal'>Завершённые задачи: {countOfFinishedGoals}</p>
                </section>
                <section className='credits'>
                    Евгений Яковлев
                </section>
            </div>
        </footer>
    )
}

export default Footer