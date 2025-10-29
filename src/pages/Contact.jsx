import "./Contact.css";
import AMOGUS from "../assets/AMOGUS.jpg"
export default function Contact(){
    return (
        <div className = "general" /*style={{padding: "2rem"}}*/>
            <div className = "text">
                <h1>Here are my contacts!</h1>
                <p>Phone Number: 936-777-5092</p>
                <p>Email Address: Marshall.Anderson@Yale.edu</p>
                <p>GitHub:{" "} <a
                href="https://github.com/PowerGuy67890"
                target="_blank"
                rel="noopener noreferrer"
                >
                    @PowerGuy67890
        </a>
        . (Its not that filled in yet, unfortunately, but that will change!)
        </p>
        <p>This line page is a lot less filled then the others, so I'm adding an among us image below:</p>
        <img src={AMOGUS} alt="AMOGUS" className= "image"/>
            </div>
        </div>
    );
}