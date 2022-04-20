import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          HomePage:{
            part1:"hello my name is",
            part2:"and this is my portfolio",
            part3:"what do you want to see ?" ,
            part4:"Graphic Design" ,
            part5:"Front end Development"
          },
          Bio: {
            part1: 'Who Im I ?',
            part2: 'Jordan Descharles, born in 91 living in Lille',
            part3: 'Firstly graphic designer i was already attracted by computers even if i only had one one for my 15th birthday, I used to draw on «paint» in others computers before that, and only with a rubber ball mouse (yeap that gross I know).',
            part4: 'after an Art College i went to a communication school to get a Webdesigner degree, then i had the chance to  get into a really good communication agency were I was formed in order to be able to produce simple websites or print designs',
            part5: 'Years passed and my will to create more advanced websites kicks in. I leaved my graphic designer job and search for a good school, after few month in a deppressing one I found that Openclassrooms had a degree in Front end developpement including projects with REACT and other cool stuffs.',
            part6: 'Now I’m nearly on the end of the schoolarship and I’m looking for a Junior job.',
            part7:'If you are curious about me : descharlesjordan[at]yahoo.com',
            part8:'you can also download my resume here : link'
          }
        }
      },
      fr: {
        translation: {
          HomePage:{
            part1:"Bonjour je m'appelle",
            part2:"et vous êtes sur mon portfolio",
            part3:"Que voulez-vous voir ?" ,
            part4:"Graphisme" ,
            part5:"Développement web front" 

          },
          Bio: {
            part1: 'Qui suis-je?',
            part2: 'Jordan Descharles, né en 91 vivant á Lille',
            part3: "Au départ designer graphique, depuis tout jeune je suis attiré par les ordinateurs même si je n'en ai eu qu'un vers mes 15 ans.Avant cela je m'amusais a dessiner sur Paint avec l'ordinateur chez d'autres gens et uniquement avec une souris a boule (je sais c'est horrible).",
            part4: "Après un diplome d'Arts Appliqués ,je suis allé en BTS communication pour devenir webdesigner,suite á cela j'ai pu intégrer une superbe agence de communication pour une alternance, ou j'ai été formé á faire des sites internet simples et de la publicité papier",          
            part5: "Les années ont passé et mon envie de créer des sites internet plus poussés s'est accentuée. J'ai quité mon travail de webdesigner et me suis mis en quete d'une bonne ecole. Après une mauvaise expérience, j'ai rejoins Openclassrooms sur un cursus développeur web front end qui inclus des projest avec React et d'autres technologies utiles.",          
            part6: "Maintenant je suis sur la fin de mon cursus et je recherche un job de développeur junior.",
            part7:"Si vous avez des questions: descharlesjordan[at]yahoo.com",
            part8: "vous pouvez télécharger mon CV ici: link"
          }
        }
      }
    }
  });

export default i18n;


