import './Display.css';


export function displayWorks(allData){ 

     const test  = allData.map(data => (printWork(data))).join('')
     return(test)
  }
  
  function printWork(data){
      
  return ` <article className="article-Container">
              <div className="image-Container" style="background-image:url(${data.img})">
                <div className="text-Container">
                  <h2>${data.name}</h2>
                  <p className="light-desc">${data.lightDesc} <span className="tag-Container"> #${data.tag}</span></p>
                </div>
              </div>
            </article>`
  
  } 