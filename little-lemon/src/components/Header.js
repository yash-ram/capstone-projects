import Nav from "./Nav";
import Logo from '../assets/images/little-lemon-logo.jpg';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    const onClickImage = () => {
        navigate('/');
      };

    return (
        <header className="header">
            <img src={Logo} alt="little lemon restaurant logo" onClick={onClickImage} className="header-logo"/>
            <Nav/>
        </header>
    );
}

export default Header;