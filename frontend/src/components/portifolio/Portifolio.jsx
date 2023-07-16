import PortfolioCard from "./PortfolioCard";
import './portfolio.css'
import portfolioImg1 from '../../access/images/portfolio1.png'
import portfolioImg2 from '../../access/images/portfolio2.png'



export default function Portfolio() {
    return (
        <>
            <div className="protfolio">
                <div className="protfolioTexts">
                    <span>Our Portfolio</span>
                    <p>We create a website of any complexity you need using the best website programming languages and help you quickly realize your ideas.</p>
                </div>
                <div className="portfolioCards">
                    <PortfolioCard img={portfolioImg1} name={"Logistic Website"} text={"Brand Strategy, Messaging Strategy, Visual Identity Design, Digital Strategy, UI/UX Design, Engineering"}/>
                    <PortfolioCard img={portfolioImg2} name={"Ve Du Tashkent SMM"} text={"Brand Strategy, Messaging Strategy, Visual Identity Design, "}/>
                </div>
            </div>
        </>
    )
}