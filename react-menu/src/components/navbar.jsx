

export default function Navbar(props) {
    return (
      <nav className="navbar">
        <ul className="navbar-ul">{props.children}</ul>
      </nav>
    );
}