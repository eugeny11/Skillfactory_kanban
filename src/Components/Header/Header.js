import React from 'react'
import './Header.css'
import UserMenu from './UserMenu/UserMenu'
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <header className='header'>
            <div className='content_of_header container'>
                <Link to='/'>
                    <h1 className='header__title'>Kanban Board</h1>
                </Link>
                <UserMenu />
            </div>
            
        </header>
    )
}

export default Header