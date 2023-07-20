import logo from '../../access/images/logo.svg'
import menu from '../../access/icons/menu.svg'
import close from '../../access/icons/close.svg'
import './nav.css'
import { useContext, useState } from 'react'
import { Context } from '../../context/Context'


export default function Navbar() {

    const [isOpen, setIsOpen] = useState(true)

    const { setLeng, leng } = useContext(Context)

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        setLeng(selectedLanguage);
    };


    return (
        <>
            <div className="nav">
                <div className="navLeft">
                    <img src={logo} alt="" className="icon" />
                    <ul className="NavMenu">
                        <li>{leng == 'uzb' ? "Biz haqimizda" : "About us"}</li>
                        <li>{leng == 'uzb' ? "Xizmatlar" : "Services"}</li>
                        <li>{leng == 'uzb' ? "Portfel" : "Porfolio"}</li>
                        <li>{leng == 'uzb' ? "Bizning jamoamiz" : "Our team"}</li>
                    </ul>
                </div>
                <div className="navRight">
                    <select name="language" id="language" className="leng" onChange={handleLanguageChange}>
                        {/* Har bir til uchun option elementi */}
                        <option value="uzb">UZB</option>
                        <option value="eng">ENG</option>
                        <option value="rus">RUS</option>
                    </select>
                    <button className="contactUs">+998 97 603 64 64</button>
                </div>
            </div>
            <div className="navRes">
                <img className='logo' src={logo} alt="" />
                <button onClick={() => setIsOpen(false)}><img src={menu} alt="" /></button>
                <div className={isOpen === true ? "menu close" : "menu"}>
                    <button onClick={() => setIsOpen(true)}><img src={close} alt="" /></button>
                    <span>{leng == 'uzb' ? "Biz haqimizda" : "About us"}</span>
                    <span>{leng == 'uzb' ? "Xizmatlar" : "Services"}</span>
                    <span>{leng == 'uzb' ? "Portfel" : "Porfolio"}</span>
                    <span>{leng == 'uzb' ? "Bizning jamoamiz" : "Our team"}</span>
                    <span>+998 97 603 64 64</span>
                    <select name="language" id="language" className="leng" onChange={handleLanguageChange}>
                        <option value="uzb">UZB</option>
                        <option value="eng">ENG</option>
                        <option value="rus">RUS</option>
                    </select>
                </div>
            </div>
        </>
    )
}