

export function displayWorks(allData){ 

     const test  = allData.map(data => (printWork(data))).join('')
     return(test)
  }
  
  function printWork(data){
      
  return ` <article>
          <div class="titleArticle">
              <h2>${data.name}</h2>
              <img src="${data.img}">
          </div> 
      </article>`
  
  } 