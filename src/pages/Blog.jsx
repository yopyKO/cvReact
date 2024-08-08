import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Button from 'react-bootstrap/Button';
import {Card} from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import '../assets/css/blog.css';


function Blog() {


    const projects = [
      {
        title: "Coder son site en HTML/CSS",
        description: "Some description for blog 1",
        imageUrl: "./src/assets/img/blog/coder.jpg",
        link: "#",
        date: "22 juillet 2024",
      },
      {
        title: "Vendre ses produits sur le web",
        description: "Some description for blog 2",
        imageUrl: "./src/assets/img/blog/croissance.jpg",
        link: "#",
        date: "07 juillet 2024",
      },
      {
        title: "Se positionner sur Google",
        description: "Some description for blog 3",
        imageUrl: "./src/assets/img/blog/google.jpg",
        link: "#",
        date: "02 juin 2024",
      },
      {
        title: "Code en responsive design",
        description: "Some description for blog 4",
        imageUrl: "./src/assets/img/blog/screens.jpg",
        link: "#",
        date: "04 mai 2024",
      },
      {
        title: "Téchniques et référencements",
        description: "Some description for blog 5",
        imageUrl: "./src/assets/img/blog/seo.jpg",
        link: "#",
        date: " 08 avril 2024",
      },
      {
        title: "Apprendre à coder",
        description: "Some description for blog 6",
        imageUrl: "./src/assets/img/blog/technos.png",
        link: "#",
        date: "13 mars 2024",
      },

    ];

    return (

        <div className="d-flex flex-column mb-5">
          <div className="bgBanner"></div>
          <div className="mt-5">
            <div className="text-center">
              <h1>Blog</h1>
              <p>Rerouvez ici quelques articles sur le développement web.</p>
              <p className="mainUnderline"></p>
            </div>
            
              <div id="cartes_blog" className="pt-5 m-auto">
                {projects.map((project) => (
                  <Card key={project.title}>
                    <Card.Img variant="top" src={project.imageUrl} />
                    <Card.Body>
                      <Card.Title style={{height:'3rem'}}>{project.title}</Card.Title>
                      <Card.Text>{project.description}</Card.Text>
                      {project.link && <Button variant="primary" href={project.link} target='#blank'>Lire la suite</Button>}
                    </Card.Body>
                    <ListGroup variant="flush">
                      <ListGroup.Item>Publié le {project.date}</ListGroup.Item>
                    </ListGroup>
                  </Card>
                ))}
              </div>
          </div>
        </div>

  );

  }
  
  export default Blog