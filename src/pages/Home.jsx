import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../assets/css/home.css";
import { Link } from "react-router-dom";

function Home() {

  
    return (
        <div className="accueil">
            <div className="text-center">
                <h1>Bonjour, je suis John Doe</h1>
                <h3>Développeur Web Full Stack</h3>
                <Link class="btn btn-primary" to="/" onClick={() => { window.scroll({ top: window.innerHeight , behavior: "smooth", }); }}>En savoir plus</Link>
            </div>
        </div>    
    )
  }
  
  export default Home