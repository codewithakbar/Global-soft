import './footer.css'

export default function Footer() {
    return (
        <footer>
            <div className="footerText">
                <span>Let’s turn your customers into fans.</span>
                <button>Contact us</button>
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
                    <ul>
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