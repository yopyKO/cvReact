import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react';

import Home from './pages/Home';
import Services from './pages/Services';
import Achievements from './pages/Achievements';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Notices from './pages/Notices';
import AboutMe from './pages/AboutMe';
import PageNotFound from './pages/404';
import ScrollToTopButton from './pages/ScrollToTopButton';


function App() {

  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [previousScrollPos, setPreviousScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setIsScrolledDown(currentScrollPos > previousScrollPos);
      setPreviousScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, );

  return (
    <>
      <div className=''>
        
        <BrowserRouter>
            <header className="navBar">
              <Navbar expand="lg" class="d-flex position-absolute top-0 start-0 text-light" collapseOnSelect>
                <Container>
                  <Navbar.Brand href="/">JOHN DOE</Navbar.Brand>   
                  <Navbar.Toggle class="right-2" aria-controls="basic-navbar-nav"/> 
                    <Navbar.Collapse id="basic-navbar-nav" class="right-0">
                      <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" eventKey={1} onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth", }); }} >Accueil</Nav.Link>
                        <Nav.Link as={Link} to="/services" eventKey={1} onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth", }); }} >Services</Nav.Link>
                        <Nav.Link as={Link} to="/achievements" eventKey={1} onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth", }); }} >Réalisations</Nav.Link>
                        <Nav.Link as={Link} to="/blog" eventKey={1} onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth", }); }} >Blog</Nav.Link>
                        <Nav.Link as={Link} to="/contact" eventKey={1} onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth", }); }} >Me Contacter</Nav.Link>
                      </Nav>
                    </Navbar.Collapse>
                </Container>
              </Navbar>

            </header>

            <body className=''>
              <div className='h-100'>
                  <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/services" element={<Services/>}></Route>
                    <Route path="/achievements" element={<Achievements/>}></Route>
                    <Route path="/blog" element={<Blog/>}></Route>
                    <Route path="/contact" element={<Contact/>}></Route>
                    <Route path="/notices" element={<Notices/>}></Route>
                    <Route path="/aboutme" element={<><Home/><AboutMe/></>}></Route>
                    <Route path="*" element={<PageNotFound/>}></Route>
                  </Routes>
                </div> 
          
            </body>
          

          <footer>
            <div className='main_footer'>
                    <div className='mt-3 mb-3 ml-2'>
                      <h3>John Doe</h3>
                      
                        <Nav.Link href="https://g.co/kgs/7KhQ8NL"  target='#blank'>13 Rue des Olivettes<br /> 44000 Nantes, France</Nav.Link>
                        <Nav.Link as={Link} to="tel:+033606060606">Téléphone: 0606060606</Nav.Link>
                        <div className="mt-3 d-flex flex-wrap">
                          <div className=''>
                            <Nav.Link as={Link} to="https://github.com/" target='#blank'><img className="socials" src="./src/assets/img/github.png" alt="github" /></Nav.Link>
                          </div>
                          <div className=''>
                            <Nav.Link as={Link} to="https://x.com/home" target='#blank'><img className="socials" src="./src/assets/img/twitter.png" alt="twitter" /></Nav.Link>
                          </div>
                          <div className=''>
                            <Nav.Link as={Link} to="https://www.linkedin.com/" target='#blank'><img className="socials" src="./src/assets/img/linkedin.png" alt="linkedin" /></Nav.Link>
                          </div>
                        </div>
                      
                    </div>

                    <div className='mt-3 mb-3'>
                      <h3>Liens Utiles</h3>
                      <ul>
                        <li><Nav.Link as={Link} to="/#" eventKey={1} onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth", }); }} >Accueil</Nav.Link></li>
                        <li><Nav.Link as={Link} to="/aboutme" eventKey={1} onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth", }); }} >À propos</Nav.Link></li>
                        <li><Nav.Link as={Link} to="/services#" eventKey={1} onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth", }); }} >Services</Nav.Link></li>
                        <li><Nav.Link as={Link} to="/contact#" eventKey={1} onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth", }); }} >Me Contacter</Nav.Link></li>
                        <li><Nav.Link as={Link} to="/notices#"eventKey={1} onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth", }); }} >Mentions Légales</Nav.Link></li>
                      </ul>
                      
                    
                    </div>

                    <div className='mt-3 mb-3'>
                      <h3>Mes dernières réalisations</h3>
                      <ul>
                        <li><Nav.Link as={Link} to="https://github.com/github-john-doe/TypoEditor/tree/BkTree" target='#blank'>Réalisation 1</Nav.Link></li>
                        <li><Nav.Link as={Link} to="https://github.com/github-john-doe/TypoEditor/tree/netcore3" target='#blank'>Réalisation 2</Nav.Link></li>
                        <li><Nav.Link as={Link} to="https://github.com/github-john-doe/TypoEditor/tree/private/exploring-mock-test" target='#blank'>Réalisation 3</Nav.Link></li>
                      </ul>
                    </div>

                    <div className='mt-3 mb-3'>
                      <h3>Mes derniers articles</h3>
                      <ul>
                        <li><Nav.Link as={Link} to="#" target='#blank'>Blog 3</Nav.Link></li>
                        <li><Nav.Link as={Link} to="#" target='#blank'>Blog 4</Nav.Link></li>
                        <li><Nav.Link as={Link} to="#" target='#blank'>Blog 6</Nav.Link></li>
                      </ul>
                    </div>
                  
            </div>
                  <div className='secondary_footer'>
                    © John Doe 2024
                    <div id="up-button" className={isScrolledDown ? '' : 'show'}>
                    <ScrollToTopButton/>
                    </div> 
                  </div>
            
          </footer>
        </BrowserRouter>
      </div>
    </>
  )
}


export default App
