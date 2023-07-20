import './home.css'
import rigthIcon from '../access/icons/right.svg'
import teamImg from '../access/images/team.png'
import clientImg1 from '../access/images/client1.png'
import clientImg2 from '../access/images/client2.png'
import workImg from '../access/images/work.png'
import Services from '../components/services/Services'
import Portfolio from '../components/portifolio/Portifolio'
import { useContext } from 'react'
import { Context } from '../context/Context'
import LightSpeed from 'react-reveal/LightSpeed'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'
import Pulse from 'react-reveal/Pulse'

export default function Home() {

    const { leng } = useContext(Context)

    return (
        <main>
            <header>
                <Pulse>
                    <div className="headerTitle">
                        <h1>{leng == 'uzb' ? "Biz bilan kelajakdagi yechim" : "Future solution with us"}</h1>
                        <p>{leng == 'uzb' ? "Companya biznes sahifasini shakilantirishda brendingizni ijtimoiy tarmoqlar mobile dasturlar orqali tanitishga va marketing sohasida zarur bo'lgan barcha xizmatlarni korsatadi!" : "We create a website of any complexity you need using the best website programming languages and help you quickly realize your ideas."}</p>
                        <button>{leng == 'uzb' ? "Boshlash" : "Get started"} <img src={rigthIcon} alt="" /></button>
                    </div>
                </Pulse>
            </header>
            <div className="client">
                <Bounce left>
                    <div className="clientCard">
                        <div className="texts">
                            <h1>800+</h1>
                            <span>{leng == 'uzb' ? "Loyiha bajarildi" : "Project done"}</span>
                        </div>
                        <p>{leng == 'uzb' ? "Brend maslahatchisi sifatida men kuchli va taniqli brend yaratish muhimligini tushunaman" : "As a brand consultant, I understand the importance of creating a strong and recognizable brand"}</p>
                    </div>
                </Bounce>
                <Fade top>
                    <div className="clientCard plus">
                        <div className="texts">
                            <h1>30+</h1>
                            <span>{leng == 'uzb' ? "Jamoa a'zolari" : "Team members"}</span>
                        </div>
                        <img src={teamImg} alt="" />
                    </div>
                </Fade>
                <Bounce right>
                    <div className="clientCardPro">
                        <div className="clientCardProLeft">
                            <div className="clientCardProLeftTitle">
                                <h1>100+</h1>
                                <span>{leng == 'uzb' ? "Baxtli mijozlar" : "Happy clients"}</span>
                            </div>
                            <img src={clientImg1} alt="" />
                        </div>
                        <div className="clientCardProRight">
                            <img src={clientImg2} alt="" />
                            <p>{leng == "uzb" ? "Brend maslahatchisi sifatida men kuchli va taniqli brend yaratish muhimligini tushunaman" : "As a brand consultant, I understand the importance of creating a strong and recognizable brand"}</p>
                        </div>
                    </div>
                </Bounce>
            </div>
            <div className="works">
                <div className="workInfoCard">
                    <div className="workInfoCardTop">
                        <span>{leng == 'uzb' ? "Nima uchun biz bilan ishlash va biz qanday ishlaymiz?" : "Why work with us & how we work?"}</span>
                        <div className="btns">
                            <button>{leng == 'uzb' ? "Ijodiy" : "Creative"}</button>
                            <button>{leng == 'uzb' ? "Qutidan tashqarida" : "Out of the Box"}</button>
                        </div>
                    </div>
                    <div className="workInfoCardBottom">
                        <p>{leng == 'uzb' ? "Moda, go'zallik, o'yin-kulgi va san'at olamiga e'tibor qaratgan dunyodagi etakchi iste'dodlarni boshqarish va marketing kompaniyasi." : "A premier global talent management and marketing company focused on the worlds of fashion, beauty, entertainment and art."}</p>
                    </div>
                </div>
                <div className="workCards">
                    <div className="workCard">
                        <img src={workImg} alt="" />
                        <span>{leng ? "Biz qanday ishlaymiz" : "How we work"}</span>
                        <p>{leng == 'uzb' ? "O'zgaruvchilar dizayningizda xususiyatlar sifatida ishlatilishi mumkin bo'lgan qiymatlarni saqlashga bag'ishlangan. Ularning maqsadi dizaynni yanada aqlli qilishga yordam berishdir; ular sizning dizayn tizimingiz uchun token bo'lishi yoki prototiplarni muayyan qoidalarga moslashtirishi mumkin. Ular bilan ilg'or prototip yaratish ancha soddalashdi." : "Variables are dedicated to store values that may be used as properties across your designs. Their goal is to help you make the design more intelligent; they may become tokens for your design system or adjust prototypes to specific rules. Advanced prototyping with them just became much simpler."}</p>
                        <button>{leng == 'uzb' ? "Ko'proq o'qish" : "Read more"} <img src={rigthIcon} alt="" /></button>
                    </div>
                </div>
            </div>
            <Services />
            <Portfolio />
        </main>
    )
}