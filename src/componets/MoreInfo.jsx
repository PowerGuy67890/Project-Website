import{useState} from "react";
import "./MoreInfo.css";

export default function MoreInfo(){
    const [showMore, setShowMore] = useState(false);
    return(
        <div className = "more-info-container">
            <button
                className= "more-info-button"
                onClick={()=> setShowMore(!showMore)}
            >
                {showMore ? "Hide More" : "Show More"}
            </button>

            {showMore && (
                <div className ={`more-info-panel ${showMore ? "show" : ""}`}>
                    <p>
                        Thank you for visiting! I'm making this when I lowkey don't have many projects yet, but keep your eye on here, because more cool projects will drop in time.
                    </p>
                </div>
            )}
        </div>
    );
}