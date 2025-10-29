import AMOGUS from "../assets/050.jpeg"
import "./Home.css";
import MoreInfo from "../componets/MoreInfo.jsx";

export default function Home(){
    return (
        <div className = "general"/*style={{padding: "2rem"}}*/>
            <img src={AMOGUS} alt="AMOGUS" className= "image"/>
            <div className= "text">
                <h1>Welcome to the Portfolio of Marshall Anderson!</h1>
                <p>I am an undergraduate student of Yale College, studying Electrical Engineering and Computer Science! Thanks for looking at my portfolio!</p>
                <p>I'm very excited to start working on actual Computer Science, now that I know Front End Dev</p>
                <MoreInfo />
            </div>
        </div>
    );
}