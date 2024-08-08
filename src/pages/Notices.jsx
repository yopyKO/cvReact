import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Notices() {

  
    return (
      <>
        <div className="mb-5 pb-5">
          <div className="text-center">
            <h1>Mentions Légales</h1>
            <p className="mainUnderline"></p>
          </div>
          
          <div className="accordion w-75 mx-auto" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Éditeur du site
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <h2>John Doe</h2>
                  <p>13 Rue des Olivettes <br />44000 Nantes, France</p>
                  <a href="tel:+033606060606">0606060606</a><br />                  
                  <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Hébergeur du site
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <h2>Codesanbox</h2>
                  <p>91 rue du Faubourg <br />44000 Nantes, France</p>                  
                  <a href="https://codesandbox.io/">www.codesandbox.io</a>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Crédits
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <h2>Crédits</h2>
                    <p>Site développé par Jonh Doe, étiduant du CEF</p>                  
                    <p>Les images sont libres de droits et issues du Site <a href="https://pixabay.com/fr/">Pixabay</a>.</p>
                  </div>
              </div>
            </div>
          </div>

        </div>
        
      </>
    )
  }
  
  export default Notices