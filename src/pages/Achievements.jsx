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
        imageUrl: "./src/assets/img/achievements1.jpg",
        link: "https://github.com/github-john-doe/TypoEditor/tree/BkTree",
        language: "PHP et MySQL",
      },
      {
        title: "Restaurant Akira",
        description: "Réalisation d'un site vitrine",
        imageUrl: "./src/assets/img/achievements2.jpg",
        link: "https://github.com/github-john-doe/TypoEditor/tree/netcore3",
        language: "Wordpress",
      },
      {
        title: "Espace bien-être",
        description: "Réalisation d'un site vitrine pour un praticien de bien-être",
        imageUrl: "./src/assets/img/achievements3.jpg",
        link: "https://github.com/github-john-doe/TypoEditor/tree/private/exploring-mock-test",
        language: "HTML et CSS",
      }
    ];
  
    return (
      <div className="d-flex flex-column mb-5 mt-5">
        <div className="text-center">
          <h1>Portfolio</h1>
          <p>Voici quelqus-unes de mes réalisations.</p>
          <p className="mainUnderline"></p>
        </div>

        <div id="cartes_achievements" className="gap-3 pt-5 mx-auto">
              {projects.map((project) => (
                <Card key={project.title}>
                  <Card.Img variant="top" src={project.imageUrl} />
                  <Card.Body>
                    <Card.Title style={{height:'3rem'}}>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    {project.link && <Button variant="primary" href={project.link} target='#blank'>Voir</Button>}
                  </Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Site réalisé grâce à {project.language}</ListGroup.Item>
                  </ListGroup>
                </Card>
              ))}
            </div>

        
      </div>
  );
  }
  
  export default Achievements