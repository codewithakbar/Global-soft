import rightIcon from '../../access/icons/right.svg'

export default function ServicesCard({img , name , text}) {
    return (
        <div className="servicesCard">
            <img src={img} alt="" />
            <span>{name}</span>
            <p>{text}</p>
            <button>Get started <img src={rightIcon} alt="" /></button>
        </div>
    )
}