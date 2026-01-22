const NavItem = (porps) => {
    const {key, path, label} = porps;

    return (
        <li>
            <a href={path} key={key} >{label}</a>
        </li>
    )
}

export default NavItem;