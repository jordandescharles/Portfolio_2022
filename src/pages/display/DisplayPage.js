import { useTranslation } from 'react-i18next';
import {displayWorks} from './Display'
import parse from 'html-react-parser';

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

const result = displayWorks(arrayPrint)

return parse(result);

  }
