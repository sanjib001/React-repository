import { NavLink } from "react-router-dom";

const NavItem = (props) => {
    const { path, label } = props;

    return (
        <li>
            <NavLink to={path} >{label}</NavLink>
        </li>
    )
}

export default NavItem;