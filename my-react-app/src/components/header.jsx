// import "./header.css";
import styles from "./header.module.css";
const Header = (props) => {
    const { organization, logo, navbar, } = props;

    return (
        // <header className="header">
        <header className = {styles["header"]}>
            {logo}
            {navbar}
            Organization Name: {organization.name}<br />
            Organization Address: {organization.address}
        </header>
    )
}

export default Header;