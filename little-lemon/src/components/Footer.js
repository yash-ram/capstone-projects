import Logo from '../assets/images/little-lemon-logo.jpg';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <img src={Logo} alt="little lemon restaurant logo" className="footer-logo"/>
            <div className="footer-site-map">
                <p className="footer-site-title"> Sitemap</p>
                <Link className="footer-site-item" to="/">
                    Home
                </Link>
                <Link className="footer-site-item" to="/about">
                    About
                </Link>
                <Link className="footer-site-item" to="/menu">
                    Menu
                </Link>
                <Link className="footer-site-item" to="/reservations">
                    Reservations
                </Link>
                <Link className="footer-site-item" to="/order-online">
                    Order Online
                </Link>
                <Link className="footer-site-item" to="/login">
                    Login
                </Link>
            </div>
            <div className="footer-contact">
                <p className="footer-contact-title">Contact</p>
                <p className="footer-contact-item"> Little Lemon, Chicago</p>
                <p className="footer-contact-item"> +1234567890</p>
                <p className="footer-contact-item"> lemon@lemon.com</p>
            </div>
        </footer>
    );
}

export default Footer;