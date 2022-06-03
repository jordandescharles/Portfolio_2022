import { useTranslation } from 'react-i18next';
import {displayWorks} from '../Display'
import parse from 'html-react-parser';


var arrayPrint = []

export default function Print() {
  
  const { t } = useTranslation();
  const list = t('Print', {returnObjects: true})
  for (const property in list) {
    arrayPrint.push(list[property])
  }


const result = displayWorks(arrayPrint)

return parse(result);


  }
