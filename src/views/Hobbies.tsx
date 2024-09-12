import { Hobbie } from "../models/Hobbie";

export const Hobbies = () => {
  const hobbies: Hobbie[] = [
    { name: 'Music', imageSrc: '3d-fluency-music-note.png' },
    { name: 'Games', imageSrc: 'casual-life-3d-arcade-joystick-green.png' },
    { name: 'Reading', imageSrc: 'casual-life-3d-green-notebook-with-orange-bookmark.png' },
    { name: 'Learning', imageSrc: '3d-casual-life-laptop-composition-video.png' },
    { name: 'Movies', imageSrc: '3d-fluency-movie-video-camera.png' },
    { name: 'Coding', imageSrc: '3d-fluency-generated-photos.png' },
  ];

  return (
    <section id="hobbies" className="hobbies center-container">
      <h2>Hobbies</h2>
      <div className="hobbies-img-container center-container">
        <img src="src/assets/casual-life-3d-man-searching-music-with-phone (2).webp" alt="hobbies"
          className="border-img" />
      </div>
      <div className="hobbies-grid">
        {
          hobbies.map((skill) => (
            <div key={skill.name} className="card">
              <img src={`src/assets/${skill.imageSrc}`} alt={skill.name} />
              <span>{skill.name}</span>
            </div>
          ))
        }
      </div>
    </section>
  );
};