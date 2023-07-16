import './services.css'
import ServicesCard from './ServicesCard'
import services1 from '../../access/images/services1.png'
import services2 from '../../access/images/services2.png'
import services3 from '../../access/images/services3.png'
import services4 from '../../access/images/services4.png'
import services5 from '../../access/images/services5.png'
import services6 from '../../access/images/services6.png'


export default function Services() {
    return (    
        <div className="services">
            <div className="servicesTexts">
                <span>Our Services</span>
                <p>We create a website of any complexity you need using the best website programming languages and help you quickly realize your ideas.</p>
            </div>
            <div className="servicesCards">
                <ServicesCard img={services1} name={"UX & UI Design"} text={"The most practical & popular usage may be to create background variables for light mode and dark mode. An alternative example may be spacing"}/>
                <ServicesCard img={services2} name={"Internet Magazine"} text={"The most practical & popular usage may be to create background variables for light mode and dark mode. An alternative example may be spacing"}/>
                <ServicesCard img={services3} name={"Graphic Design"} text={"The most practical & popular usage may be to create background variables for light mode and dark mode. An alternative example may be spacing"}/>
                <ServicesCard img={services4} name={"SMM Design"} text={"The most practical & popular usage may be to create background variables for light mode and dark mode. An alternative example may be spacing"}/>
                <ServicesCard img={services5} name={"Motion Design"} text={"The most practical & popular usage may be to create background variables for light mode and dark mode. An alternative example may be spacing"}/>
                <ServicesCard img={services6} name={"Telegram Bot"} text={"The most practical & popular usage may be to create background variables for light mode and dark mode. An alternative example may be spacing"}/>
            </div>
        </div>
    )
}