import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'

import './Editor.css';
import { setCurrentFile } from '../../../redux/modules/CurrentFile.js';


export default function Editor() {
    const dispatch = useDispatch()
    const currentFile = useSelector((state) => state.currentFile.currentFile)
    const openedFiles = useSelector((state) => state.openedFiles.openedFiles)
    const sideBarComp = useSelector((state) => state.sideBarComp.sideBarComp)
    console.log(openedFiles)
    console.log(currentFile)

    const myWidth = sideBarComp ? 'calc(100vw - 252px)' : 'calc(100vw - 51px)'

    function tabOnClick(fileInfo) {
        if (currentFile !== fileInfo) {
            dispatch(setCurrentFile(fileInfo))
        }
    }


    return (
        <div className='Editor' style={{ width: `${myWidth}`}}>
            {openedFiles.length !== 0 && 
                <ul className='TabMenu'>
                    {openedFiles.map((fileInfo, index) => 
                        <>
                            <li key={index} className={currentFile === fileInfo ? 'CurrentTab' : 'Tab'} onClick={() => tabOnClick(fileInfo)}>
                                <FontAwesomeIcon className='FileIcon' icon={faFile} size='1x' />
                                {fileInfo.name}
                            </li>
                            <div style={{ width: '1px', height: '100%', backgroundColor: '#666', zIndex: 0 }} />
                        </>
                    )}

                </ul>
            }
            {openedFiles.length !== 0 && 
                <div style={{ width: '100%', height: '1px', backgroundColor: '#666' }} />
            }
            {currentFile && 
                <textarea className='TabContent' value={currentFile.content} />
            }
        </div>  
    );
};


