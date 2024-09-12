export function Work () {
  return (
    <section id="work" className="center-container">
      <h2>My Work</h2>
      <div className="work-img-container center-container">
        <img src="src/assets/3d-casual-life-young-people-discussing-team-project-at-a-laptop.webp" alt="work"
          className="border-img" loading="lazy" />
      </div>
      <div className="projects">
        <div className="project">
          <div className="info">
            <div className="title">
              <img src="src/assets/icons8-circle.svg" alt="html" loading="lazy" />
              <h3>Encrypter</h3>
            </div>
            <span className="subtitle">Javascript | HTML | CSS</span>
            <div className="description">Page where you can encrypt and decrypt text in a simple way. In this, only
              lowercase letters and spaces are valid. </div>
          </div>
          <div className="view">
            <a href="https://andrewslaxe.github.io/Encriptador/" className="btn">View Project</a>
            <img src="src/assets/icons8-arrow (1).svg" alt="html" loading="lazy" />
          </div>
          <img loading="lazy" src="src/assets/[removal.ai]_eb9d4fab-b0a2-49a1-823a-337b290a8546.png" alt="encryptor"
            className="project-img" />
        </div>
        <div className="project">
          <div className="info">
            <div className="title">
              <img loading="lazy" src="src/assets/icons8-circle.svg" alt="html" />
              <h3>Rick and Morty</h3>
            </div>
            <span className="subtitle">Angular | CSS</span>
            <div className="description">Page using the Rick and Morty API. Using filtering characters and pagination.
            </div>
          </div>
          <div className="view">
            <a href="https://andrewslaxe.github.io/RickAndMorty/" className="btn">View Project</a>
            <img loading="lazy" src="src/assets/icons8-arrow (1).svg" alt="html" />
          </div>
          <img loading="lazy" className="project-img" src="src/assets/Diseño sin título (8).png" alt="Rick and Morty" />
        </div>
        <div className="project">
          <div className="info">
            <div className="title">
              <img loading="lazy" src="src/assets/icons8-circle.svg" alt="html" />
              <h3>Greenhouse Control</h3>
            </div>
            <span className="subtitle">React | Express | MongoDB</span>
            <div className="description">An application using a ESP32 microcontroller network to send temperature to DB and
              controlling the light bulb, fan and heater from the web page in order to change the light and the
              temperature in the place. </div>
          </div>
          <div className="view">
            <a href="https://greenhouse-frontend-iota.vercel.app/" className="btn">View Project</a>
            <img loading="lazy" src="src/assets/icons8-arrow (1).svg" alt="html" />
          </div>
          <img loading="lazy" className="project-img" src="src/assets/Copia de Diseño sin título.png"
            alt="Greenhouse Control" />
        </div>
      </div>
    </section>
  )
}