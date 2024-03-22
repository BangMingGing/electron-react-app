import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import './Directory.css'
import File from '../file/File.js'



export default function Directory({ index, directoryData }) {
    const [openContents, setOpenContents] = useState(false)

    const paddingLeft = `${directoryData.depth * 15}px`
        
    const toggleContents = (e) => {
        e.stopPropagation()
        setOpenContents(!openContents)
    }


    return (
        <div className='Directory'>
            <div className='DirectoryInfo' onClick={toggleContents} style={{ paddingLeft }}>
                {openContents ? 
                    <FontAwesomeIcon className='DirectoryIcon' icon={faAngleDown} size='1x' /> :
                    <FontAwesomeIcon className='DirectoryIcon' icon={faAngleRight} size='1x' />
                }
                <label className={directoryData.name}>{directoryData.name}</label>
            </div>
            <div className='DirectoryContents'>
                {(openContents && directoryData.contents) && directoryData.contents.map((content, index) => (
                    content.type === 'file' ?
                        <File key={index} fileData={content} /> :
                        <Directory key={index} directoryData={content} />
                ))}
            </div>
        </div>
    )
}