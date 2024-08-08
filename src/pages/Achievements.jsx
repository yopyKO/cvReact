import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Button from 'react-bootstrap/Button';
import {Card} from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import '../assets/css/achievements.css'


function Achievements() {


    const projects = [
      {
        title: "Fresh Food",
        description: "Réalisation d'un site avec commande en ligne",
        imageUrl: "./src/assets/img/portfolio/fresh-food.jpg",
        link: "https://github.com/github-john-doe/TypoEditor/tree/BkTree",
        language: "PHP et MySQL",
      },
      {
        title: "Restaurant Akira",
        description: "Réalisation d'un site vitrine",
        imageUrl: "./src/assets/img/portfolio/restaurant-japonais.jpg",
        link: "https://github.com/github-john-doe/TypoEditor/tree/netcore3",
        language: "Wordpress",
      },
      {
        title: "Espace bien-être",
        description: "Réalisation d'un site vitrine pour un praticien de bien-être",
        imageUrl: "./src/assets/img/portfolio/espace-bien-etre.jpg",
        link: "https://github.com/github-john-doe/TypoEditor/tree/private/exploring-mock-test",
        language: "HTML et CSS",
      }
    ];
  
    return (
      <div className="d-flex flex-column mb-5">
        <div className="bgBanner"></div>
        <div className="mt-5">
          <div className="text-center">
            <h1>Portfolio</h1>
            <p>Voici quelqus-unes de mes réalisations.</p>
            <p className="mainUnderline"></p>
          </div>

          <div id="cartes_achievements" className="gap-3 pt-5 mx-auto">
                {projects.map((project) => (
                  <Card key={project.title}>
                    <Card.Img variant="top" src={project.imageUrl} />
                    <Card.Body className="d-flex flex-column justify-items-around">
                      <Card.Title className="text-center" style={{height:'3rem', fontSize:'2rem'}}>{project.title}</Card.Title>
                      <Card.Text className="text-center">{project.description}</Card.Text>
                      {project.link && <Button className="buttonAchievements mx-auto" variant="primary bg-transparent" href={project.link} target='#blank'>Voir</Button>}
                    </Card.Body>
                    <ListGroup variant="flush">
                      <ListGroup.Item className="text-center">Site réalisé grâce à {project.language}</ListGroup.Item>
                    </ListGroup>
                  </Card>
                ))}
          </div>

        </div>
      </div>
  );
  }
  
  export default Achievements