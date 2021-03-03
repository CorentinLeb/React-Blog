import{NavLink} from'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <div><NavLink exact activeClassName='active' to="/">
            Home
            </NavLink></div>
            <div><NavLink  to="/blog">Blog</NavLink> </div>  
            <div><NavLink  to="/contact">Contact</NavLink></div>
        </div>
    )
}

export default Navbar