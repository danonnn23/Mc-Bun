import logo from '../assets/Logo.png';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <>
            <div className="nav-container">
                <div className='logo-section'>
                    <NavLink to="/home" className="logo-btn">
                        <img className='logo-pic' src={logo} alt="Logo" />
                    </NavLink>
                </div>
                <nav className='nav-bar'>
                    <ul>
                        <li><NavLink to="/home" className='nav-btn'>Home</NavLink></li>
                        <li><NavLink to="/menu" className='nav-btn'>Menu</NavLink></li>
                        <li><NavLink to="/about" className='nav-btn'>About</NavLink></li>
                        <li><NavLink to="/delivery" className='nav-btn'>Delivery</NavLink></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default NavBar