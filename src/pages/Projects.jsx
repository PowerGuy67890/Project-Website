import "./Projects.css";
import IMG_7758 from "../assets/IMG_7758.jpg"
export default function Projects(){
    return (
        <div className ="general"/*style={{padding: "2rem"}}*/>
            <div className= "text">
                <h1>Here are some of my projects</h1>
                <p>I lowkey don't have any comp sci projects yet</p>
                <p>Actual projects will follow</p>
                <p>I did theatre shows throughout high school. Here's a picture from one of my shows:</p>
                <img src={IMG_7758} alt="IMG_7758" className= "image"></img>
            </div>
        </div>
    );
}