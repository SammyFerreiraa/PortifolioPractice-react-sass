import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiReact,
    DiSass
  } from "react-icons/di";
  
  import "../styles/components/technologiescontainer.sass";
  
  const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 />, texto: 'Experiência e conhecimento avançado em HTML' },
    { id: "css", name: "CSS3", icon: <DiCss3 />, texto: 'Experiência e conhecimento avançado em CSS' },
    { id: "js", name: "JavaScript", icon: <DiJsBadge />, texto: 'Experiência e conhecimento avançado em JavaScript' },
    { id: "sass", name: "Sass", icon: <DiSass />, texto: 'Conhecimento em Sass' },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall />, texto: 'Estudando NodeJs' },
    { id: "react", name: "React", icon: <DiReact />, texto: 'Estudando ReactJs' },
  ];
  
  const TechnologiesContainer = () => {
    return (
      <section className="technologies-container">
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
          {technologies.map((language) => (
            <div className="technology-card" id={language.id} key={language.id}>
              {language.icon}
              <div className="technology-info">
                <h3>{language.name}</h3>
                <p>{language.texto}.</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default TechnologiesContainer;