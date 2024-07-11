import { Link } from "react-router-dom";
import '/src/styles/Navbar.css'
function Navbar() {
    return ( 
        <>
            <nav className="navbar navbar-expand-lg my-2">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src="/src/assets/Shahid_Logo.png" alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link text-light"to="/">Home</Link>
                        <Link className="nav-link text-light" to="/movies">All Movies</Link>
                        <Link className="nav-link text-light" to="/contact">Contact Us</Link>
                    </div>
                    </div>
                </div>
            </nav>
        </>
     );
}

export default Navbar;