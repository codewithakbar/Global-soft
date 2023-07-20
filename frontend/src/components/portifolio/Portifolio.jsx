import PortfolioCard from "./PortfolioCard";
import './portfolio.css'
import portfolioImg1 from '../../access/images/portfolio1.png'
import portfolioImg2 from '../../access/images/portfolio2.png'
import { useContext } from "react";
import { Context } from "../../context/Context";



export default function Portfolio() {

    const {leng} = useContext(Context)

    return (
        <>
            <div className="protfolio">
                <div className="protfolioTexts">
                    <span>{leng == 'uzb' ? "Bizning portfelimiz" : "Our Portfolio"}</span>
                    <p>{leng == 'uzb' ? "Biz eng yaxshi veb-sayt dasturlash tillaridan foydalangan holda har qanday murakkablikdagi veb-saytni yaratamiz va g'oyalaringizni tezda amalga oshirishga yordam beramiz." : "We create a website of any complexity you need using the best website programming languages and help you quickly realize your ideas."}</p>
                </div>
                <div className="portfolioCards">
                    <PortfolioCard img={portfolioImg1} name={"Logistic Website"} text={"Brand Strategy, Messaging Strategy, Visual Identity Design, Digital Strategy, UI/UX Design, Engineering"}/>
                    <PortfolioCard img={portfolioImg2} name={"Ve Du Tashkent SMM"} text={"Brand Strategy, Messaging Strategy, Visual Identity Design, "}/>
                </div>
            </div>
        </>
    )
}