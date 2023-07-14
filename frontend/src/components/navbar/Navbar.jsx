import logo from '../../access/images/logo.svg'
import './nav.css'


export default function Navbar() {
    return (
        <div className="nav">
            <div className="navLeft">
                <img src={logo} alt="" className="icon" />
                <ul className="NavMenu">
                    <li>About us</li>
                    <li>Services</li>
                    <li>Porfolio</li>
                    <li>Our team</li>
                </ul>
            </div>
            <div className="navRight">
                <select name="" id="" className="leng">
                    <option value="ENG">ENG</option>
                    <option value="UZB">UZB</option>
                    <option value="RUS">RUS</option>
                </select>
                <button className="contactUs">Contact us</button>
            </div>
        </div>
    )
}