import './home.css'
import rigthIcon from '../access/icons/right.svg'
import teamImg from '../access/images/team.png'
import clientImg1 from '../access/images/client1.png'
import clientImg2 from '../access/images/client2.png'
import workImg from '../access/images/work.png'
import Services from '../components/services/Services'
import Portfolio from '../components/portifolio/Portifolio'

export default function Home() {
    return (
        <main>
            <header>
                <div className="headerTitle">
                    <h1>Future solution with us</h1>
                    <p>We create a website of any complexity you need using the best website programming languages and help you quickly realize your ideas.</p>
                    <button>Get started <img src={rigthIcon} alt="" /></button>
                </div>
            </header>
            <div className="client">
                <div className="clientCard">
                    <div className="texts">
                        <h1>800+</h1>
                        <span>Project done</span>
                    </div>
                    <p>As a brand consultant, I understand the importance of creating a strong and recognizable brand</p>
                </div>
                <div className="clientCard plus">
                    <div className="texts">
                        <h1>800+</h1>
                        <span>Project done</span>
                    </div>
                    <img src={teamImg} alt="" />
                </div>
                <div className="clientCardPro">
                    <div className="clientCardProLeft">
                        <div className="clientCardProLeftTitle">
                            <h1>100+</h1>
                            <span>Happy clients</span>
                        </div>
                        <img src={clientImg1} alt="" />
                    </div>
                    <div className="clientCardProRight">
                        <img src={clientImg2} alt="" />
                        <p>As a brand consultant, I understand the importance of creating a strong and recognizable brand</p>
                    </div>
                </div>
            </div>
            <div className="works">
                <div className="workInfoCard">
                    <div className="workInfoCardTop">
                        <span>Why work with us & how we work?</span>
                        <div className="btns">
                            <button>Creative</button>
                            <button>Out of the Box</button>
                        </div>
                    </div>
                    <div className="workInfoCardBottom">
                        <p>A premier global talent management and marketing company focused on the worlds of fashion, beauty, entertainment and art.</p>
                    </div>
                </div>
                <div className="workCards">
                    <div className="workCard">
                        <img src={workImg} alt="" />
                        <span>How we work</span>
                        <p>Variables are dedicated to store values that may be used as properties across your designs. Their goal is to help you make the design more intelligent; they may become tokens for your design system or adjust prototypes to specific rules. Advanced prototyping with them just became much simpler.</p>
                        <button>Read more <img src={rigthIcon} alt="" /></button>
                    </div>
                </div>
            </div>
            <Services />
            <Portfolio />
        </main>
    )
}