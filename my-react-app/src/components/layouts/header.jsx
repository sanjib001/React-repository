import DesktopNavbar from "./desktopnav";
import MobileNavbar from "./mobilenav";
import "./header.css"

const Header = () => {
    return (
        <header>
            <DesktopNavbar/>
            <MobileNavbar/>
        </header>
    )
}

export default Header;