import { useEffect, useState } from 'react'

import './Explorer.css'
import Directory from './directory/Directory.js'


export default function Explorer(props) {
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
                <Directory index={1} directoryData={directoryData} props />
            }
        </div>
    )
}
