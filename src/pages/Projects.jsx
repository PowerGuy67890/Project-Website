import "./Projects.css";
import IMG_7758 from "../assets/DND.png"
export default function Projects(){
    return (
        <div className ="general"/*style={{padding: "2rem"}}*/>
            <div className= "text">
                <h1>Here are some of my projects</h1>
                <p>My first real project was based around replicating a DND campaign I played with my friends.</p>
                <p>I found an AI model and feed it information about the game world and mechanics, and then built a front end interface for users to interact with.</p>
                <p>The model handles the information well and simulates the game successful. The only issue is long run times due to my PC not being strong enough to run the model well.</p>
                <p>Here is a screenshot of my user interface:</p>
                <img src={IMG_7758} alt="IMG_7758" className= "image"></img>
            </div>
        </div>
    );
}
