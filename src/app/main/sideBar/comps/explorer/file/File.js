// import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';

import './File.css'



export default function File({ index, fileData, propsFromMain }) {
    
    const fileName = fileData.name.split('\\').pop()
    const paddingLeft = `${fileData.depth * 15}px`;
    // const [bgColor, setBgColor] = useState('#333');

    const toggleContents = (e) => {
        e.stopPropagation()

        if (!propsFromMain.openedFileNames.includes(fileData.name)) {
            propsFromMain.setOpenedFileNames(prevOpenedFileNames => {
                return[...prevOpenedFileNames, fileData.name]
            })
        }
        propsFromMain.setCurrentFileName(fileName)
    }

    // useEffect(() => {
    //     if (propsFromMain.currentFileName === fileData.name) {
    //         setBgColor('#111')
    //     }
    // }, [propsFromMain.currentFileName, fileData.name])


    return (
        <div className='File'>
            <div className='Info' onClick={toggleContents} style={{ paddingLeft }}>
                <FontAwesomeIcon className='FileIcon' icon={faFile} size='1x' />
                <label className={fileName} >{fileName}</label>
            </div>
        </div>
    )
}