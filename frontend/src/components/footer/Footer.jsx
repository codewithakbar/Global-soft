import { useContext } from 'react'
import './footer.css'
import { Context } from '../../context/Context'

export default function Footer() {

    const {leng} = useContext(Context)

    return (
        <footer>
            <div className="footerText">
                <span>{leng == 'uzb' ? "Keling, mijozlaringizni muxlislarga aylantiraylik." : "Let’s turn your customers into fans."}</span>
                <button>{leng == 'uzb' ? "Biz bilan bog'lanish" : "Contact us"}</button>
            </div>
            <div className="footer">
                <div className="footerTop">
                    <ul>
                        <span>New Business</span>
                        <li>Contact us</li>
                    </ul>
                    <ul>
                        <span>Explore</span>
                        <li>About us</li>
                        <li>Services</li>
                        <li>Porfolio</li>
                    </ul>
                    <ul>
                        <span>Contact with us</span>
                        <li>Instagram</li>
                        <li>Telegram</li>
                    </ul>
                    <ul className='null'>
                        <span>Because it matters </span>
                    </ul>
                </div>
                <div className="footerBottom">
                    <span>© Copyright 2023 Global iT Company</span>
                </div>
            </div>
        </footer>
    )
}