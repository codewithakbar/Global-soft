import './home.css'
import rigthIcon from '../access/icons/right.svg'
import teamImg from '../access/images/team.png'
import clientImg1 from '../access/images/client1.png'
import clientImg2 from '../access/images/client2.png'

export default function Home() {
    return (
        <main>
            <header>
                <img src="https://static.vecteezy.com/system/resources/previews/009/314/440/original/earth-globe-clip-art-vector-illustration-isolated-free-png.png" alt="" />
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
        </main>
    )
}