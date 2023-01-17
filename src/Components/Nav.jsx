import React from 'react'
import '../Styles/Nav.css'
import BussinesCard from './BussinesCard'

const Nav = () => {
    return (
        <>
            <div className='nav_container'>
                <div className='bussines_card_nav'>
                    <img className='Logo_nav' src="https://www.svgrepo.com/show/433958/nodes.svg" alt="" ></img>
                    <h1 className='Title_nav'>
                        <span className='Title_nav1'>Total</span>
                        <span className='Title_nav2'> IT </span>
                        <span className='Title_nav3'>Financial</span>
                    </h1>
                </div>
                <div className='buttons'>
                    <button className="button" onClick={() => window.scrollTo(725, 725)}>Quienes Somos</button>
                    <button className="button" onClick={() => window.scrollTo(1550, 1550)}>Informacion</button>
                    <button className="button" onClick={() => window.scrollTo(3000, 3000)}>Contacto</button>
                </div>
            </div>
        </>
    )
}

export default Nav