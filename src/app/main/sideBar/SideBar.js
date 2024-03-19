import { useState } from 'react'

import './SideBar.css'
import SideBarMenu from './sideBarMenu/SideBarMenu';
import SideBarCompResizeBar from './sideBarCompResizeBar/SideBarCompResizeBar';
import Explorer from './comps/explorer/Explorer';


export default function SideBar(props) {
    const [currentComp, setCurrentComp] = useState(null)

    let compSellector = {
        'Explorer': <Explorer props />
    }

    const resizeComp = document.getElementsByClassName('SideBarComp')[0]


    return (
        <div className='SideBar'>
            <SideBarMenu setCurrentComp={setCurrentComp} />
            {currentComp &&
                <div className='SideBarComp' id='SideBarComp'>
                    {currentComp !== null && compSellector[currentComp]}
                    <SideBarCompResizeBar resizeComp={resizeComp} />
                </div>
            }
        </div>
    )
}
