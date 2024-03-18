import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import './Directory.css'
import File from '../file/File.js'



export default function Directory({ directoryData }) {
    const [openContents, setOpenContents] = useState(false)

    const toggleContents = (e) => {
        e.stopPropagation()
        setOpenContents(!openContents)
    }

    const paddingLeft = `${directoryData.depth * 15}px`

    const directoryName = directoryData.name.split('\\').pop()

    return (
        <div className='Directory'>
            <div className='Info' onClick={toggleContents} style={{ paddingLeft }}>
                {openContents ? 
                    <FontAwesomeIcon className='DirectoryIcon' icon={faAngleRight} size='1x' /> :
                    <FontAwesomeIcon className='DirectoryIcon' icon={faAngleDown} size='1x' />
                }
                <label className={directoryName}>{directoryName}</label>
            </div>
            <div className='Contents'>
                {(openContents && directoryData.contents) && directoryData.contents.map((content) => (
                    content.type === 'file' ?
                        <File fileData={content} /> :
                        <Directory directoryData={content} />
                ))}
            </div>
        </div>
    )
}