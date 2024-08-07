import '../assets/css/aboutMe.css';

function AboutMe() {
 /* const [user, setUser] = useState({});

  const fetchUser = async () => {
    try {
      const response = await fetch("https://api.github.com/users/github-john-doe");
      if (!response.ok) {
        throw new Error(`Failed to fetch user: ${response.status}`);
      }
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error("Erreur lors de la récupération de l'utilisateur:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  
  const skills = [
    {
      project: "1",
      title: "HTML.5",
      language: "html",
      rate : "90%",
    },
    {
      project: "2",
      title: "CSS.3",
      language: "css",
      rate : "80%",
    },
    {
      project: "3",
      title: "JAVASCRIPT",
      language: "js",
      rate : "70%",
    },
    {
      project: "4",
      title: "PHP",
      language: "php",
      rate : "60%",
    },
    {
      project: "5",
      title: "REACT",
      language: "react",
      rate : "50%",
    },
  ];
  */

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
      {/*}
      <div className="d-block p-2 bg-primary text-white">
        {user.id && ( 
          <article key={user.id} className="card">
            <h2>{user.name}</h2>
            <p>{user.bio}</p>
            <img src={user.avatar_url} alt={user.login} />
            <p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                {user.html_url}
              </a>
            </p>
          </article>
        )}
      </div>*/}
    </div>
  );
}

export default AboutMe;
