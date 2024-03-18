import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';

import './File.css'



export default function File({ fileData }) {

    const toggleContents = (e) => {
        e.stopPropagation()
    }

    const paddingLeft = `${fileData.depth * 15}px`;

    const fileName = fileData.name.split('\\').pop()

    return (
        <div className='File'>
            <div className='Info' onClick={toggleContents} style={{ paddingLeft }}>
                <FontAwesomeIcon className='FileIcon' icon={faFile} size='1x' />
                <label className={fileName} >{fileName}</label>
            </div>
        </div>
    )
}