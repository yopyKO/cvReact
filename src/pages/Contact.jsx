import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../assets/css/contact.css';


function Contact() {

  const form = useRef();

  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xserg7c',
        'template_71psnql',
        form.current, 
        'JWRz-mapX4b2U3Flz',)
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSubmitted(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const handleReset = () => {
    form.current.reset();
    setIsSubmitted(false);
  };


    return (
        
          <div id="contact" className="pt-5 text-center d-flex flex-column justify-content-center align-items-center">
            <div className="zoneContact m-4">
                <div className="me_contacter pt-3 w-75 d-flex flex-column justify-content-center align-items-center mx-auto">
                  <h1>Me contacter</h1>
                  <p>Pour me contacter en vue d&#39;un entretien ou d&#39;une future collaboration, merci de remplir le formulaire de contact.</p>
                  <p className="mainUnderline"></p>
                </div >
                <div id="formulaire_coordon">
                  <div id="formulaire_de_contact">
                      <h2 id="souligneTitre">Formulaire de contact</h2>
                      
                      <Form className="w-75 d-flex flex-column mt-3" ref={form} onSubmit={sendEmail}>
                        
                        <Form.Group className="mb-3" controlId="formBasicName">
                          <Form.Control type="text" name="user_name" placeholder="Nom" required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">                
                          <Form.Control type="email" name="user_email" placeholder="Entrer l'email" required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicNumber">
                          <Form.Control type="phone" name="user_phone" placeholder="Numéro de téléphone" required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicSubject">
                          <Form.Control type="text" name="user_subject" placeholder="Sujet" required/>
                        </Form.Group>

                        <div className="mb-3">
                          <textarea rows="4" className="form-control" id="validationTextarea" name="message" placeholder="Votre message" required></textarea>
                          <div className="invalid-feedback">
                          Merci de remplir ce champ!
                          </div>
                        </div>

                        <Button className="mx-auto" variant="primary" type="submit">
                          Envoyer
                        </Button>

                        {isSubmitted && ( <div className="modal show d-block mx-auto b">
                                          <Modal.Dialog>
                                            <Modal.Body>
                                              <p>Votre message a été envoyé avec succès!</p>
                                            </Modal.Body>
                                            <Modal.Footer>
                                              <Button variant="secondary" onClick={handleReset}>
                                              Réinitialiser le formulaire
                                              </Button>
                                            </Modal.Footer>
                                          </Modal.Dialog>
                                          </div>                              
                                        )}
                      </Form>
                    
                  </div>

                  <div id="mes_coordonées" className="w-75 mx-auto">

                    <h2 id="souligneTitre">Mes coordonnées</h2>
                    <div className="mb-5 pb-5 d-flex flex-column align-items-center">
                      <br />
                      <address>
                      13 Rue des Olivettes, 44000 Nantes <br />
                        <a href="tel:+033606060606">0606060606</a>
                      </address>
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.229191952914!2d-1.5521149233176674!3d47.21209761513623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805eeafdf45d1f1%3A0xe58f4efdb5f5500f!2sJohn%20Doe%20Escape%20Game%20Nantes!5e0!3m2!1sfr!2sfr!4v1722686626647!5m2!1sfr!2sfr&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe>
                    </div>
                  </div>
                </div>
            </div>    
          </div>
        

    )
  }
  
  export default Contact