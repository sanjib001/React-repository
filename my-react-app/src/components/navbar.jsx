// import "./navbar.css";
import styles from "./navbar.module.css";
const Navbar = (props) => {
    // const navItems = [
    //     { url: "/home", label: "Home" },
    //     { url: "/about", label: "About" },
    //     { url: "/contact", label: "Contact" }
    // ]
    const { navItems } = props;
    return (
        // <div className="header">
        <div className= {styles["header"]}>
            <nav>
                <ul style={{ display: "flex", listStyle: "none" }}>
                    {navItems.map((navItem, index) => (
                        <li key={index}>
                            <a href={navItem.url} >{navItem.label}</a>
                        </li>
                    ))}

                </ul>
            </nav>
        </div>

    )
}

export default Navbar;