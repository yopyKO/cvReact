import '../assets/css/aboutMe.css';

function AboutMe() {


  return (
    <div className="d-block p-2 px-5">
      <div className="about_skill">
        <div className="a_propos pt-5">
          <h2 id="souligneTitre">À propos</h2>
          <p>Passioné par l&apos;informatique et les nouvelles technologies, j&apos;ai suivi une formation d&apos;<strong>intégrateur-développeur</strong> web auprès du CEF. Au cours 
            de cette formation, j&apos;ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web</strong>. <br /><br />
            Basé à Nantes, je suis en recherche d&apos;une alternance au sein d&apos;une agence digitale pour consolider ma formation de <strong>développeur web full stack</strong>. <br /><br />
            J&apos;accorde une attention toute particulière à la qualité du code que j&apos;écris et je respecte les bonnes pratiques du web.
          </p>
        </div>
        <div className="skill_rate">
          <img className="skill_img" src="./src/assets/img/about.jpg" alt="worker"/>
            <section>
            <h3>Mes compétences</h3>
            
            <p>HTML.5 90%</p>
            <div className="progressBar">
              <div className="skills html"></div>
            </div>

            <p>CSS.3 80%</p>
            <div className="progressBar">
              <div className="skills css"></div>
            </div>

            <p>JAVASCRIPT 70%</p>
            <div className="progressBar">
              <div className="skills js"></div>
            </div>

            <p>PHP 60%</p>
            <div className="progressBar">
              <div className="skills php"></div>
            </div>

            <p>REACT 50%</p>
            <div className="progressBar">
              <div className="skills react"></div>
            </div>

          </section>
        </div>
      </div>
      
    </div>
  );
}

export default AboutMe;
