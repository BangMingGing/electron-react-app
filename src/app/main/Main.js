import './Main.css'
import SideBar from './sideBar/SideBar.js'
import Editor from './editor/Editor.js'

export default function Main() {
    

    return (
        <div className='Main'>
            <SideBar />
            <div style={{width: '1px', height: '100%', backgroundColor: '#666'}} />
            <Editor />
        </div>
    )
}