import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import './FileTab.css';
import { setCurrentFile } from '../../../../redux/modules/CurrentFile';


export default function FileTab({ index, fileInfo }) {
    const dispatch = useDispatch()
    const currentFile = useSelector((state) => state.currentFile.currentFile)
    const [fileContent, setFileContent] = useState(null)
    const [loading, setLoading] = useState(true);

    const isCurrentFile = (currentFile.path === fileInfo.path)
    
    const infoOnClick = () => {
        dispatch(setCurrentFile(fileInfo))
    }

    useEffect(() => {
        const fetchData = async (filePath) => {
            try {
                const content = await window.electronAPI.getFileContent(filePath);
                setFileContent(content);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching file content:', error);
                setLoading(false);
            }
        }
        fetchData(fileInfo.path)
    }, [fileInfo])


    return (
        <div className='FileTab'>
            <div className={isCurrentFile ? 'MainFileTabInfo' : 'FileTabInfo'} onClick={infoOnClick}>
                <FontAwesomeIcon className='FileIcon' icon={faFile} size='1x' />
                <label className={fileInfo.name} >{fileInfo.name}</label>
            </div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <textarea value={fileContent || ''} />
            )}
        </div>
    );
};


