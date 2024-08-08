import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {Card} from 'react-bootstrap';

function Services() {

  const projects = [
    {
      title: "UX DESIGN",
      description: "L'UX Design est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une éxpérience de navigation optimale à l'internaute.",
      link: "#",
      imageUrl: "./src/assets/img/ecran.png",
    },
    {
      title: "Développement web",
      description: "Le développement des sites web repose sur l'utilisation des langages HTML, CSS, JavaScript et PHP.",
      link: "#",
      imageUrl: "./src/assets/img/programmation.png",
    },
    {
      title: "Référencement",
      description: "le référencement naturel d'un site, aussi appelé SEO, consiste à mettre des techniques pour améliorer sa position dans les résultats des moteurs de recherche.",
      link: "#",
      imageUrl: "./src/assets/img/referencement.png",
    },


  ];

  return (

      <div className="text-center d-flex flex-column align-content-center mb-5">
        <div className="bgBanner"></div>
        <div className="mt-5">
          <h1>Mon offre de services</h1>
          <p>Voici les prestations sur lesquelles je peux intervenir.</p>
          <p className="mainUnderline"></p>
          <div className="mt-5">
            <div className="d-flex flex-wrap justify-content-evenly align-content-center mx-auto">
              {projects.map((project) => (
                <Card class="" key={project.title} style={{ width: '18rem', height:'20rem', margin: '10px'}}>
                  <Card.Body style={{paddingTop:'4rem'}}>
                    <Card.Img variant="top" style={{ width: '3rem', height:'3rem', marginBottom:'1rem'}} src={project.imageUrl} />
                    <strong><Card.Title class="card_title">{project.title}</Card.Title></strong>
                    <Card.Text>{project.description}</Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

);

}
  
  export default Services
