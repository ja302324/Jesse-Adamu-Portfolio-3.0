import "../css/header.css"
import logo from "../assets/Images/navbar/Signature.png"

const Header = () => {
    return <div className="navbar">
        <img className="nav-img" src={logo} alt="Jesse Adamu logo" />

        <ul>
            <li><a href="#home-section">Home</a></li>
            <li><a href="#about-section">About</a></li>
            <li><a href="#work-section">Portfolio</a></li>
            <li><a href="#contact-section">Contact</a></li>
        </ul>
    </div>;
}

export default Header;
