export function Card(para){
    let badgeText = ""
    if(para.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if (para.location === "Online"){
        badgeText = "ONLINE"
    }

    return(
        
    <div className="card">
        {badgeText && <div className="sold-out">
            {badgeText}
        </div>}
        <img src={para.img} alt="" width="200px" height="300px"></img>
        <div className="star">
            <img src="Star 1.png" alt=""></img>
            <span>{para.stats.rating}</span>
            <span className="grey">({para.stats.reviewCount})</span>
            <span className="grey">{para.location}</span>
        </div>
        <p>Life Lessons with Katie Zaferes</p>
        <p>From ${para.price} / person</p>
    </div>
            
            
    )
}