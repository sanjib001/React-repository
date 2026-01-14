
const Header = (props) => {
    const {organization, logo, navbar,} = props;

    return (
        <header>
            {logo}
            {navbar}
            Organization Name: {organization.name}<br/>
            Organization Address: {organization.address}
        </header>
    )
}

export default Header;