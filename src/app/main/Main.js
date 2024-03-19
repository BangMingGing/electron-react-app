import { useState } from 'react'

import './Main.css'
import SideBar from './sideBar/SideBar.js'
import Editor from './editor/Editor.js'

export default function Main() {
    const [openedFileNames, setOpenedFileNames] = useState([])
    const [currentFileName, setCurrentFileName] = useState(null)
    

    return (
        <div className='Main'>
            <SideBar openedFileNames={openedFileNames} setOpenedFileNames={setOpenedFileNames} currentFileName={currentFileName} setCurrentFileName={setCurrentFileName}/>
            <Editor openedFileNames={openedFileNames} setOpenedFileNames={setOpenedFileNames} currentFileName={currentFileName} setCurrentFileName={setCurrentFileName}/>
        </div>
    )
}