import "./Navbar.css";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <header className="header">
            <Link to="#" className="logo">Anirudh Adithya.</Link>

            <nav className="navbar">
                <Link to="/" className="active">Home</Link>
                <Link to="/about">About</Link>
                <Link to="#">Work Experience</Link>
                <Link to="#">Portfolio</Link>
                <Link to="#">Contact</Link>
            </nav>
        </header>
    )
}

export default Navbar;