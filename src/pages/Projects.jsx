import "./Projects.css";
import IMG_7758 from "../assets/DND.png"
export default function Projects(){
    return (
        <div className ="general"/*style={{padding: "2rem"}}*/>
            <div className= "text">
                <h1>My first real project is an attempt to simulate a DND campaign I played with my friends.</h1>
                <p>I made an stylized user interface and used calls to an AI model locally to process information</p>
                <p>It works great, albiet a little slow due to the amount of data it processes.</p>
                <p>Here is the Github repo:{" "} <a
                href="https://github.com/PowerGuy67890/DND-project"
                target="_blank"
                rel="noopener noreferrer"
                >
        </a></p>
                <p>Here is a screenshot of the user interface:</p>
                <img src={IMG_7758} alt="IMG_7758" className= "image"></img>
            </div>
        </div>
    );
}
