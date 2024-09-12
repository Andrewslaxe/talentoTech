import { QualificationCard } from "../models/Qualification";

export const Qualification = () => {
  const qualifications: QualificationCard = {
    work: [
      {
        description: 'Performing software integration solutions and software development consulting services for clients. Modernizing applications and innovating faster using the hybrid cloud to reduce costs and increase productivity.',
        title: 'Software Engineer',
        imageSrc: 'ibm-logo.jpg'
      },
      {
        description: 'Provide professional consulting services, support, implementation of technological infrastructure, design, production, processing, marketing and training of software and hardware.',
        title: 'IT Consultant',
        imageSrc: 'logo_sas.png',
        customStyles: 'sas'
      }
    ],
    education: [
      {
        title: 'Electronic Engineer',
        imageSrc: 'U_Sergio_Arboleda_logo.png'
      },
      {
        title: 'Intermediate Backend Developer',
        imageSrc: 'Escudo_UD.svg'
      },
      {
        title: 'Frontend Developer',
        imageSrc: 'guia-cursos-one.webp'
      },
    ]
  };

  return (
    <section id="qualification" className="qualification center-container">
      <h2>Qualification</h2>
      <div className="qualification-block center-container">
        <div className="qualification-img-container center-container">
          <img src="src/assets/qualification-hero.png" alt="qualification" className="border-img" />
        </div>
        <div className="qualification-flex center-container">
          <div className="cards-work">
            <div className="title">
              <img src="src/assets/icons8-square.svg" alt="html" />
              <h3>Work</h3>
            </div>
            <div className="cards">
              {qualifications.work.map((qualification) => (
                <div className={'card ' + qualification.customStyles} key={qualification.title}>
                  <img src={`src/assets/${qualification.imageSrc}`} alt="html" />
                  <div className="card-content">
                    <span>{qualification.title}</span>
                    <p>{qualification.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="cards-education">
            <div className="title">
              <img src="src/assets/icons8-square.svg" alt="html" loading="lazy" />
              <h3>Education</h3>
            </div>
            <div className="cards">
              {qualifications.education.map((qualification) => (
                <div className="card" key={qualification.title}>
                  <img src={`src/assets/${qualification.imageSrc}`} alt="html" loading="lazy" />
                  <div className="card-content">
                    <span>{qualification.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};