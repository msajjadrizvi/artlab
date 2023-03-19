import React,{useState} from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';
import { useWindowSize } from "usehooks-ts";
import {FaBars, FaRegTimesCircle} from "react-icons/fa"
import { useNavigate } from 'react-router-dom';

function NavBar() {
    const [openMenu, setOpenMenu] = useState(false)
    const {width} = useWindowSize()
    const navigate = useNavigate()

    const handlePage = (name) => {
        if(name === "home"){
            setOpenMenu(false)
            navigate(`/`)
        }
        if(name === "personality"){
            setOpenMenu(false)
            navigate(`/assessment`)
        }
        if(name === "emotional"){
            setOpenMenu(false)
            navigate(`/Soon`)
        }
        if(name === "intelligence"){
            setOpenMenu(false)
            navigate(`/Soon`)
        }
    }
    
    return (
        <>
        {width >= 760 ? (
            <nav className="nav-container">
                <ul className='nav-wrapper'>
                    <li>
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li>
                        <Link to="/assessment" className="nav-link">Personality Test</Link>
                    </li>
                    <li>
                        <Link to="/Soon" className="nav-link">Emotional Test</Link>
                    </li>
                    <li>
                        <Link to="/Soon" className="nav-link">Intelligence Test</Link>
                    </li>
                </ul>
            </nav>
            ) 
            :
            <>
            {!openMenu && (
            <div className='nav-container'>   
                <div className='mobile-wrapper'>
                   <FaBars className="menu-btn" onClick={() => setOpenMenu(true)}/> 
                </div>
            </div> 
            )}
            {openMenu && (
                <div className='menu-container'>
                    <div className='mobile-menuMain'>
                        <div className='closeIconMain'>
                            <FaRegTimesCircle className='close-btn' onClick={() => setOpenMenu(false)}/>
                        </div>
                        <div className='pageList'>
                            <p onClick={()=>handlePage("home")}>Home</p>
                            <p onClick={()=>handlePage("personality")}>Personality Test</p>
                            <p onClick={()=>handlePage("emotional")}>Emotional Test</p>
                            <p onClick={()=>handlePage("intelligence")}>Intelligence Test</p>
                        </div>
                    </div>
                </div>
            )}
            </>
        }
        </>
    )
}

export default NavBar