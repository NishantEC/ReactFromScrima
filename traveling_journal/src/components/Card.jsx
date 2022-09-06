import anchor from "../assets/anchor.png"

export default function Card(props){

    return(
        <div className="card-wrapper">
            
            <div className="card-photo-wrapper"><img className="card-photo" src={props.imageUrl}/></div>
            <div className="hero-wrapper">
                 <div className="hero-location"><img className="anchor"src={anchor}/><p className="location">{props.location}</p><a href={props.googleMapsUrl} target="_blank"> View on Google Maps</a></div>
                 <div className="hero-title"><b>{props.title}</b></div>
                 <div className="hero-date"><b>{props.startDate} - {props.endDate}</b></div>
                 <div className="hero-description"><p>{props.description}</p></div>
            </div>
        </div>
    )
}