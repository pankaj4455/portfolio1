import React from 'react'

import  { NavLink } from 'react-router-dom'


const Menu =()=>{
    return (
        <>
        
        
            <nav className='navbar navbar-expand-lg bg-dark justify-content-center '>
                <NavLink exact to="/"  id="navbar-brand" activeClassName='active-class'>Portfolio</NavLink>
              <ul className='navbar-nav'>
                
                  <li className='nav-item ' id="item"> <NavLink exact to="/" activeClassName='active-class'>About</NavLink></li>
                 <li className= "nav-item " id="item">   <NavLink exact to="/contact" activeClassName='active-class'>Contactus</NavLink></li>
                  <li className='nav-item 'id="item">  <NavLink exact to="/skill" activeClassName='active-class'>Skills</NavLink></li>
                   <li className='nav-item ' id="item"> <NavLink  exact to="/project" activeClassName='active-class'>Project</NavLink> </li>
                    <li className='nav=item 'id="item"><NavLink exact to="/log" activeClassName="active-class">Login</NavLink> </li>
</ul>
                
            </nav>

        
        
        
        
        </>
    )
}
export default Menu;