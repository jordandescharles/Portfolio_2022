import './project.css'
const displayProject = (data) => {
    return ( 
        `
              <div className="project-Container">
                <div className="project-Image">
                <img src='${data.img}' alt=''/>
                </div>
                <div className="project-Text">
                <h1><a href="https://open.spotify.com/playlist/7MCO8I3kOHtKQXY1KYV0tm?si=25f97c72fe034c94" target="Blank" style="text-decoration:none, color:black">${data.CatchPhrase}</a></h1>
                <h3>Techno : ${data.techno} </h3>
                <p>${data.desc}</p> </div>
              </div>

        `
    );
};

export default displayProject;