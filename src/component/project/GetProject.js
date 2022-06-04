
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';
import DisplayProject from './DisplayProject';


var selectedProject = ''

const GetProject = (props) => {

    const { t } = useTranslation();
    const list = t(props.source, { returnObjects: true })
    for (const property in list) {
        if (list[property].name.includes(props.name)) {
            selectedProject = list[property]
        }
    }
    const result = DisplayProject(selectedProject)
    return parse(result)
};

export default GetProject;