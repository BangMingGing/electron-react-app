import './File.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';


export default function File({ fileData }) {

    const toggleContents = (e) => {
        e.stopPropagation()
    }


    return (
        <div className='File'>
            <div className='Info' onClick={toggleContents}>
                <FontAwesomeIcon className='FileIcon' icon={faFile} size='1x' />
                <label className={fileData.name} >{fileData.name}</label>
            </div>
        </div>
    )
}