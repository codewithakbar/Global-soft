

export default function PortfolioCard({img , name , text}) {
    return (
        <div className="protfolioCard">
            <img src={img} alt="" />
            <span>{name}</span>
            <p>{text}</p>
        </div>
    )
}