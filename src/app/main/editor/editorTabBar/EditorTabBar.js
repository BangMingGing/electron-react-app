import { useSelector } from 'react-redux'

import './EditorTabBar.css'


export default function EditorTabBar() {
    const openedFiles = useSelector((state) => state.openedFiles.openedFiles)

    return (
        <div className='EditorTabBar'>
            {openedFiles.map((fileInfo, index) =>
                <>
                    <div className='tab' key={index}>
                        {fileInfo.name}
                    </div>
                    <div style={{ width: '1px', height: '100%', backgroundColor: '#666' }} />
                </>
            )}
        </div>
    )
}
