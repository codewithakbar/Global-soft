import './services.css'
import ServicesCard from './ServicesCard'
import services1 from '../../access/images/services1.png'
import services2 from '../../access/images/services2.png'
import services3 from '../../access/images/services3.png'
import services4 from '../../access/images/services4.png'
import services5 from '../../access/images/services5.png'
import services6 from '../../access/images/services6.png'
import { useContext } from 'react'
import { Context } from '../../context/Context'


export default function Services() {

    const {leng} = useContext(Context)

    return (    
        <div className="services">
            <div className="servicesTexts">
                <span>{leng == 'uzb' ? "Bizning xizmatlarimiz" : "Our Services"}</span>
                <p>{leng == 'uzb' ? "Biz eng yaxshi veb-sayt dasturlash tillaridan foydalangan holda har qanday murakkablikdagi veb-saytni yaratamiz va g'oyalaringizni tezda amalga oshirishga yordam beramiz." : "We create a website of any complexity you need using the best website programming languages and help you quickly realize your ideas."}</p>
            </div>
            <div className="servicesCards">
                <ServicesCard img={services1} name={"UX & UI Design"} text={leng == 'uzb' ? "Onlayn biznesingizni yanada brend darajasiga ko'tarishni xohlaysizmi? Ko'proq mijoz jalb qilishnichi? Unda biz sizga mukammal va jozibador ko'rinishga ega dizayn chizish xizmatimizni taklif qilamiz." : "The most practical & popular usage may be to create background variables for light mode and dark mode. An alternative example may be spacing"}/>
                <ServicesCard img={services2} name={"Internet Magazine"} text={leng == 'uzb' ? "Mahsulotlaringizni onlayn sotmoqchimisiz? Unda sizga Onlayn Internet Magazin xizmatimizni taklif qilamiz. Daromatingizni qisqa vaqt ichida yanada oshirishga erishing." : "The most practical & popular usage may be to create background variables for light mode and dark mode. An alternative example may be spacing"}/>
                <ServicesCard img={services3} name={"Graphic Design"} text={leng == 'uzb' ? "Sizning brendingiz va qarashlaringiz logotip orqali ifodalanadi. Sizning logotip haqida fikrlaringiz va his tuyg'ularingiz har doim muhim." : "The most practical & popular usage may be to create background variables for light mode and dark mode. An alternative example may be spacing"}/>
                <ServicesCard img={services4} name={"SMM Design"} text={leng == 'uzb' ? "Ijtimoiy media platformalari uchun qiziqarli va tegishli kontent yaratish jumladan postlarni rejalashtirish va sharhlar/xabarlarga javob berish  marketing maqsadlariga erishish uchun keng qamrovli ijtimoiy media strategiyasini ishlab chiqish O'zaro munosabatlarni o'rnatish va kirishni kengaytirish uchun yoqtirishlarni o'rganish" : "The most practical & popular usage may be to create background variables for light mode and dark mode. An alternative example may be spacing"}/>
                <ServicesCard img={services5} name={"Motion Design"} text={leng == 'uzb' ? "Biznesingizda  tanishtirish mahsulot xizmatni namoyish etish yoki mijozlaringizni  nima bilan qiziqtira olishni aniqlash rad etib bolmas takliflarni nomoyon qilish chegirma va sovgalar xaqida malumot berish" : "The most practical & popular usage may be to create background variables for light mode and dark mode. An alternative example may be spacing"}/>
                <ServicesCard img={services6} name={"Telegram Bot"} text={leng ==  'uzb' ? "Telegram botlar mijozlaringiz bilan aloqa qilishga yordam beradi. Telegram botlar har qanday biznes boshlash uchun eng yaxshi tanlov." : "The most practical & popular usage may be to create background variables for light mode and dark mode. An alternative example may be spacing"}/>
            </div>
        </div>
    )
}