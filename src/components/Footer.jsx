import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>McBun</h2>
          <p>Feeding heroes since 2026</p>
        </div>
        <nav className="footer-nav">
          <NavLink to="/home">HOME</NavLink>
          <NavLink to="/menu">MENU</NavLink>
        </nav>
        <div className="footer-bottom">
          <p>MADE WITH POW! BY Danylo Tolochko</p>
          <p>© 2026 McBun Comics. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer