import logo from '../assets/Logo.png';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <>
            <div className='cmp-global-header'>
                <div className="mcb-global-nav">
                    <div className="cmp-global-header__desktop-nav">
                        <div className="cmp-header__container">
                            <div className="cmp-header__logo">
                                <div className='cmp-image'>
                                    <NavLink to="/home" className="cmp-image__link">
                                        <img className='cmp-image__image' src={logo} alt="Logo" />
                                    </NavLink>
                                </div>
                            </div>
                            <div className="cmp-header__nav">
                                <nav className='cmp-navigation'>
                                    <ul className='cmp-navigation__group'>
                                        <li className='cmp-navigation__item'>
                                            <NavLink to="/home" className="cmp-navigation__link">Home</NavLink>
                                        </li>
                                        <li className='cmp-navigation__item'>
                                            <NavLink to="/menu" className="cmp-navigation__link">Menu</NavLink>
                                        </li>
                                        <li className='cmp-navigation__item'>
                                            <NavLink to="/about" className="cmp-navigation__link">About</NavLink>
                                        </li>
                                        <li className='cmp-navigation__item'>
                                            <NavLink to="/delivery" className="cmp-navigation__link">Delivery</NavLink>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="mobile-nav"></div>
            </div>
        </>
    )
}

export default NavBar