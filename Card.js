import React from "react";
export default function Card(props){
    let badgeText;
    if(props.openSports === 0){
        badgeText = "SOLD OUT";
    }else if(props.location=== "Online"){
        badgeText = "ONLINE"
    }
    return(
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={`images/${props.coverImg}`} className="card-img" alt="kati" />
            <div className="card-stats">
                <img src="images/star.png" className="card-star" alt="star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) </span>
                <span className="gray">. {props.Location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From {props.price}</span>/ person</p>
        </div>
    )
}