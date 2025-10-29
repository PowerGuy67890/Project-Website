/*import {Link} from "react-router-dom";

export default function Navbar(){
    return(
        <nav style={{ padding: "1em", borderBottom: "1px solid #ddd"}}>
            <Link to="/"style={{marginRight: "1rem"}}>Home</Link>
            <Link to="/projects"style={{marginRight: "1rem"}}>My Projects</Link>
            <Link to="/contact"style={{marginRight: "1rem"}}>Contact Info</Link>
        </nav>
    );
}*/
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () =>{
      setScrolled(window.scrollY>0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-header">
        <div className="nav-title">Portfolio</div>

        <button
          className="nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
      </div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/projects" onClick={() => setIsOpen(false)}>My Projects</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Info</Link>
      </div>
    </nav>
  );
}