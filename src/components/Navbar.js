let Navbar = () => {
    return <div className="navbar">
        <div>
            <img alt="author-icon" className="icon"></img>
            <span className="site-name">Nate Martinez</span>
        </div>

        <div className="nav-menu">
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </div>
    </div>
}

export default Navbar;