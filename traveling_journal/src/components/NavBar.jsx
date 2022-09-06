import Logo from "../assets/logo.png"

export default function NavBar(){
    return(
        <div className="nav-wrapper">
            <img className="nav-logo" src={Logo}/><p className="nav-title">My Travel Journal</p>
        </div>
    )
}