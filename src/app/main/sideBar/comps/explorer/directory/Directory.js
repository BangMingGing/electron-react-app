import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import './Directory.css'
import File from '../file/File.js'



export default function Directory({ index, directoryData, props }) {
    const [openContents, setOpenContents] = useState(false)

    const directoryName = directoryData.name.split('\\').pop()
    const paddingLeft = `${directoryData.depth * 15}px`
        
    const toggleContents = (e) => {
        e.stopPropagation()
        setOpenContents(!openContents)
    }


    return (
        <div className='Directory'>
            <div className='Info' onClick={toggleContents} style={{ paddingLeft }}>
                {openContents ? 
                    <FontAwesomeIcon className='DirectoryIcon' icon={faAngleDown} size='1x' /> :
                    <FontAwesomeIcon className='DirectoryIcon' icon={faAngleRight} size='1x' />
                }
                <label className={directoryName}>{directoryName}</label>
            </div>
            <div className='Contents'>
                {(openContents && directoryData.contents) && directoryData.contents.map((content, index) => (
                    content.type === 'file' ?
                        <File key={index} fileData={content} props={props} /> :
                        <Directory key={index} directoryData={content} props={props} />
                ))}
            </div>
        </div>
    )
}