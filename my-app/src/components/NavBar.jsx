import React from 'react'
import {FaAlignJustify} from 'react-icons/fa'
function NavBar (){
    const [state, setState] = React.useState(true);
    return(
        <nav className="navbar">
           <div className="container">
                <div className="navbar__container">
                        <ul className='navbar__left'>
                            <div className="navbar__left-logo">
                                    <img src="./avatar.png" alt="" />
                            </div>
                        </ul>
                        {state?(
                            <ul className="navbar__right">
                               <li><a href="#main">Home</a></li> 
                               <li><a href="#About">A propos</a></li> 
                               <li><a href="#Skills">Compétences</a></li> 
                               <li><a href="#Projects">Projets</a></li> 
                            </ul>
                        ) : (
                            ""
                        )}
                </div>
            </div> 
              <div className="toggle" onClick={() =>setState(!state)}>
                <FaAlignJustify/>
              </div>
        </nav>
    )
}
export default NavBar