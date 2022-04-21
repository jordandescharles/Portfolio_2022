import React from 'react'
import { useTranslation } from 'react-i18next';


export default function Print() {
    
     const { t } = useTranslation();
     const list = t('Print', {returnObjects: true})

     for (const property in list) {
        console.log(`${list[property].desc}`);
    
      }
   

 
     

  
  return (
      
    <div>
        
    </div>
  )
}
