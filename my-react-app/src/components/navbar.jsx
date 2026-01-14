const Navbar = (props) => {
    // const navItems = [
    //     { url: "/home", label: "Home" },
    //     { url: "/about", label: "About" },
    //     { url: "/contact", label: "Contact" }
    // ]
    const { navItems } = props;
    return (
        <nav>
            <ul style={{ display: "flex", listStyle: "none" }}>
                {navItems.map((navItem, index) => (
                    <li key={index}>
                        <a href={navItem.url} style={{ color: "white" }}>{navItem.label}</a>
                    </li>
                ))}

            </ul>
        </nav>
    )
}

export default Navbar;