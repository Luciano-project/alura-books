import logo from '../img/logo.svg'
import './style.css'

/*
    To build components in React, we should create functions.
    This allows us to reuse the code in other parts of the
    application in a easy way.
*/
function Logo(){
    return (
    <div className='logo'>

        <img src={logo}
        alt='logo'
        className="logo-img"
        ></img>
        
        <p><strong>AluraBooks</strong></p>

    </div>)
    }

export default Logo; // Here is the setup for the export to Logo for the other files to use.