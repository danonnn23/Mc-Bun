import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand footer-block">
          <div>
            <h2>McBun</h2>
            <p>Feeding heroes since 2026</p>
          </div>
        </div>
        <div className='footer-block'>
          <nav className="footer-nav">
            <NavLink to="/home">HOME</NavLink>
            <NavLink to="/menu">MENU</NavLink>
            <NavLink to="/about">ABOUT</NavLink>
            <NavLink to="/delivery">DELIVERY</NavLink>
          </nav>
        </div>
        <div className="footer-bottom footer-block">
          <div>
            <p>MADE WITH POW! BY Danylo Tolochko</p>
            <p>© 2026 McBun Comics. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer