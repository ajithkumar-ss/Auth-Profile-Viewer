import { Link, useNavigate } from "react-router-dom"
const Navbar = () => {
    let navigator = useNavigate();
    let token = localStorage.getItem("TOKEN");

    let handlelogout=()=>{
        localStorage.removeItem("TOKEN");
        navigator("/login")
    }
  return (
    <nav className='navbar'>
        <div>
            <span className='crud'>Crud</span>
            <span className='operation'>Operation</span>
        </div>

        {
            token?(
                <button onClick={handlelogout} className="navba">Logout</button>
            ):
        <div  className="navba">
            <Link to="/login">Login</Link>
            <Link to='/'>Register</Link>
        </div>
        }
    </nav>
    )
}

export default Navbar
