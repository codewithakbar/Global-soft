import logo from '../../access/images/logo.svg'
import menu from '../../access/icons/menu.svg'
import close from '../../access/icons/close.svg'
import './nav.css'
import { useState } from 'react'


export default function Navbar() {

    const [isOpen , setIsOpen] = useState(true)

    return (
        <>
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
            <div className="navRes">
                <img className='logo' src={logo} alt="" />
                <button onClick={() => setIsOpen(false)}><img src={menu} alt="" /></button>
                <div className={isOpen === true ? "menu close" : "menu"}>
                    <button onClick={() => setIsOpen(true)}><img src={close} alt="" /></button>
                    <span>About us</span>
                    <span>Services</span>
                    <span>Porfolio</span>
                    <span>Our team</span>
                    <span>Contacts</span>
                    <select name="" id="" className="leng">
                        <option value="ENG">ENG</option>
                        <option value="UZB">UZB</option>
                        <option value="RUS">RUS</option>
                    </select>
                </div>
            </div>
        </>
    )
}