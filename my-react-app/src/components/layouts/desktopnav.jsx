import NavItem from "./navitem";
import NavLogo from "./navlogo";
import Button from "../reuseable/button";

const DesktopNavbar = () => {
    const navitems = [
        { label: "Services", path: "/services" },
        { label: "Products", path: "/products" },
        { label: "Porjects", path: "/projects" },
        { label: "About", path: "/about" },
        { label: "Contact", path: "/contact" },
    ]

    return (
        <div className="disktop-nav">
            <NavLogo />
            <nav>
                <ul>
                    {navitems.map((item, index) => (
                        <NavItem key={index} label={item.label} path={item.path} />
                    ))}
                </ul>
            </nav>
            <Button type="black">Get started</Button>
        </div>
    )
}

export default DesktopNavbar;