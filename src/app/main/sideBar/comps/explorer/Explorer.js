import { useEffect, useState } from 'react'

import './Explorer.css'
import RootDirectory from './rootDirectory/RootDirectory.js'


export default function Explorer() {
    const [directoryData, setDirectoryData] = useState(null)

    const selectDirectory = async () => {
        setDirectoryData(await window.electronAPI.selectDirectory())
    }

    useEffect(() => {
        console.log(directoryData)
    }, [directoryData])


    return (
        <div className='Explorer'>
            {directoryData === null &&
                (<div className='NoSelectedDirectory'>
                    <button className='SelectDirectoryBtn' onClick={selectDirectory}>Select Directory</button>
                </div>)
            }
            {directoryData !== null &&
                <RootDirectory directoryData={directoryData} />
            }
        </div>
    )
}
