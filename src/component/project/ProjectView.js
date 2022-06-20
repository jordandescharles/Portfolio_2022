
import GetProject from './GetProject';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const ProjectView = () => {

  const params = useParams()
  const {name,source} = params
    
  console.log(name + "test")

    return ( 
      <>
        <div className='title-Container'>
          <div style={{ display: 'flex' }}>
            <Link to={"/"+source} ><span className='Cross-Page' >X</span></Link>
            <div className='title'>
              <h2>{name}</h2>
            </div>
          </div>
          </div>
          <GetProject name={name} source={source} />
        </>
        );
  
}

export default ProjectView