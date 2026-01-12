import Logo from './logo'
import Navbar from './navbar'

const Header = () => {
    return (
        <header style={{ display: 'flex', alignItems: 'center'}}>
            <Logo />
            <Navbar />
        </header>
    )
}

export default Header;