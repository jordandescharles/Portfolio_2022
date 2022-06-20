import { useTranslation } from 'react-i18next';
import DisplayWorks from './Display'

var arrayPrint = []

export default function DisplayPage(props) {
  
  const { t } = useTranslation();
  const list = t(props.source, {returnObjects: true})
  arrayPrint = []

  for (const property in list) {
    if(list[property].tag.includes(props.filter)){
        arrayPrint.push(list[property])
    }
    if (props.filter === "null"  || props.filter === undefined ){
        arrayPrint.push(list[property])
    }
}
return <>
  { arrayPrint.map(data => 
  <DisplayWorks data={data} key={data.name}/> 
  )}
       
        </>

  }
