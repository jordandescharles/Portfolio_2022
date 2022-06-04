import './project.css'
const displayProject = (data) => {
    return ( 
        `
              <div className="project-Container">
              
                <div className="project-Image">
                <img src='${data.img}' alt=''/>
                </div>
                <div className="project-Text">
                <h1>${data.CatchPhrase}</h1>
                <h3> ${data.techno} </h3>
                <p>${data.desc}</p> </div>
              </div>

        `
    );
};

export default displayProject;