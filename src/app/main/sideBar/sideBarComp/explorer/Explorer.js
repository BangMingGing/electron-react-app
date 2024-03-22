import { useSelector, useDispatch } from 'react-redux'

import './Explorer.css'
import Directory from './directory/Directory.js'
import { setDirectoryData } from '../../../../../redux/modules/DirectoryData.js'


export default function Explorer() {
    const dispatch = useDispatch()
    const directoryData = useSelector((state) => state.directoryData.directoryData)

    const selectDirectoryOnClick = async () => {
        const directoryDataFromElectron = await window.electronAPI.getDirectoryData()
        dispatch(setDirectoryData(directoryDataFromElectron))
    }


    return (
        <div className='Explorer'>
            {directoryData === null &&
                (<div className='NoSelectedDirectory'>
                    <button className='SelectDirectoryBtn' onClick={selectDirectoryOnClick}>Select Directory</button>
                </div>)
            }
            {directoryData !== null &&
                <Directory index={1} directoryData={directoryData} />
            }
        </div>
    )
}
