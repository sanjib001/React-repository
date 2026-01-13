// import Logo from './logo' //default import
import { Logo } from './logo'
import MyNavbar from './navbar'


const Header = () => {
    return (
        <header style={{ display: 'flex', alignItems: 'center' }}>
            <Logo />
            <MyNavbar />
        </header>
    )
}

export default Header;