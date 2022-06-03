import { useTranslation } from 'react-i18next';
import {displayWorks} from '../Display'
import parse from 'html-react-parser';


var arrayPrint = []

export default function PrintPage(filter) {
    
  const { t } = useTranslation();
  const list = t('Print', {returnObjects: true})
  arrayPrint = []

  for (const property in list) {
    if(list[property].tag.includes(filter.filter)){
        arrayPrint.push(list[property])
    }
    if (filter.filter === "null"  || filter.filter === undefined ){
        arrayPrint.push(list[property])
    }
}

const result = displayWorks(arrayPrint)

return parse(result);

  }
