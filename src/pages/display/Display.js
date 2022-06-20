import './Display.css';
import { Link } from 'react-router-dom';

export default function DisplayWorks(props) {
  const data = props.data
  // const test = allData.map(data => (printWork(data))).join('')
  return <article className="article-Container">
            <Link className="white-Link" to={'/projectview/'+data.name+'/'+data.source} >
              <div className="image-Container" style={{backgroundImage:` url("${data.img}")`} } >
                <div className="text-Container">
                  <h2>{data.name}</h2>
                  <p className="light-desc">{data.lightDesc} <span className="tag-Container"> {data.tag}</span></p>
                </div>
              </div>
           </Link>
          </article>
}