import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'

import './File.css'
import { addOpenedFile } from '../../../../../../redux/modules/OpenedFiles'
import { setCurrentFile } from '../../../../../../redux/modules/CurrentFile'


export default function File({ index, fileData }) {
    const dispatch = useDispatch()
    const paddingLeft = `${fileData.depth * 15}px`

    // Info 클릭 이벤트
    const infoOnClick = async () => {
        try {
            // File 내용 가져오기
            const content = await window.electronAPI.getFileContent(fileData.path)
            const fileInfo = {
                path: fileData.path,
                name: fileData.name,
                content: content
            }
            // 상태정보 업데이트
            dispatch(addOpenedFile(fileInfo))
            dispatch(setCurrentFile(fileInfo))
        } catch (error) {
            console.log('Error occurred while fetching file content:', error)
        }
    }


    return (
        <div className='File'>
            <div className='FileInfo' style={{ paddingLeft }} onClick={infoOnClick}>
                <FontAwesomeIcon className='FileIcon' icon={faFile} size='1x' />
                {fileData.name}
            </div>
        </div>
    )
}