import "./Navbar.css";


const Navbar = () => {
    return (
        <header className="header">
            <a href="#" className="logo">Anirudh Adithya.</a>

            <nav className="navbar">
                <a href="/" className="active">Home</a>
                <a href="/about">About</a>
                <a href="#">Work Experience</a>
                <a href="#">Portfolio</a>
                <a href="#">Contact</a>
            </nav>
        </header>
    )
}

export default Navbar;