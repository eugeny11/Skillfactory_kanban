import React,  {useState} from 'react'
import './DropDown.css'

export const DropDown = ({
    listOfDropDownGoals,
    chosenGoal, SetChosenGoal,
    chosenId, SetChosenId,
}) => {
    const [watchOps, SetWatchOps] = useState(false)

    const handleClick = () => {
        SetWatchOps(!watchOps)
    }

    const handleOpsClick = (e) => {
        SetChosenGoal(e.target.dataset.name)
        SetChosenId(e.target.dataset.id)
        SetWatchOps(false)
    }

    return (
        <div className='dropdown'>
            <div className='add-goal-to-dropdown' onClick={handleClick}>
                <div data-id={chosenId}>{chosenGoal || 'Выберите задачу из дропа'}</div>
            </div>
            {watchOps &&(
                <ul className='add-goal-to-dropdown-ops'>
                    {listOfDropDownGoals.map((goal) => (
                        <li className='add-goal-to-dropdown-ops-item'
                        key={goal.id}
                        data-id={goal.id}
                        data-name={goal.name}
                        onClick={handleOpsClick}>
                            {goal.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}