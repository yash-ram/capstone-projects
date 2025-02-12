import { Link } from 'react-router-dom';

function Nav() {
    return (
        <>
        <nav className="navigation">
                <Link to="/" className="nav-item">Home</Link>
                <a href="#about" className="nav-item">About</a>
                <a href="#/menu" className="nav-item">Menu</a>
                <Link to="/reservations" className="nav-item">Reservations</Link>
                <a href="#/order-online" className="nav-item">Order Online</a>
                <a href="#/login" className="nav-item">Login</a>
        </nav>
        </>
    );
}

export default Nav;