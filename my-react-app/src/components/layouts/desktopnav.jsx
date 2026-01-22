import NavItem from "./navitem";
import NavLogo from "./navlogo";
import Button from "../reuseable/button";

const DesktopNavbar = () => {
    const navitems = [
        { label: "Home", path: "/" },
        { label: "Wine", path: "/wine" },
        { label: "Coffee", path: "/coffee" },
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