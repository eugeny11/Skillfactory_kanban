import React, {useState} from "react"
import userAvatar from './user-avatar.png'
import arrow from './arrow.png'
import './UserMenu.css'

const UserMenu = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    return(
        <div className="user__menu" onClick={handleClick}>
            <div className='user__menu-avatar-arrow'>
                <img className='user_avatar' src={userAvatar} alt=""/>
                <img className={
                    click
                    ? "user__menu-arrow user__menu-clicked-arrow" : "user__menu-arrow"
                } 
                src={arrow} alt="arrow"
                />
            </div>
            {click && (
                <>
                <div className='user__menu-arrow-button'>
                    <ul className='user__menu-arrow-dropdown'>
                        <li className='dropdown-pos'>Profile</li>
                        <li className='dropdown-pos'>Goals</li>
                        <li className='dropdown-pos'>Log Out</li>
                    </ul>
                </div>
                </>
            )}
        </div>
    )
}

export default UserMenu