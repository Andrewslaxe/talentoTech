import { Skill } from "../models/Skill";

export const Skills = () => {
  const skills: Skill[] = [
    { name: 'React', imageSrc: 'icons8-react.svg' },
    { name: 'CSS', imageSrc: 'icons8-css3.svg' },
    { name: 'Node', imageSrc: 'icons8-nodejs.svg' },
    { name: 'Spring Boot', imageSrc: 'icons8-spring-boot.svg' },
    { name: 'PostgreSQL', imageSrc: 'icons8-postgresql.svg' },
    { name: 'MySQL', imageSrc: 'mysql-svgrepo-com.svg' },
    { name: 'MongoDB', imageSrc: 'icons8-mongodb.svg' },
    { name: 'Docker', imageSrc: 'icons8-docker.svg' },
    { name: 'Git', imageSrc: 'icons8-git.svg' },
    { name: 'Kubernetes', imageSrc: 'icons8-kubernetes.svg' },
  ];

  return (
    <section id="skills" className="skills center-container">
      <h2>My Skills</h2>
      <div className="skills-container">
        <div className="skills-img-container center-container">
          <img src="src/assets/skills-hero.webp" alt="skills" className="border-img" />
        </div>
        <div className="skills-grid">
          {
            skills.map((skill) => (
              <div key={skill.name} className="card">
                <img src={`src/assets/${skill.imageSrc}`} alt={skill.name} />
                <span>{skill.name}</span>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};