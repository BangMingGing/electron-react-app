import { useSelector } from 'react-redux';


import './SideBarComp.css'
// import SideBarCompResizeBar from './sideBarCompResizeBar/SideBarCompResizeBar.js';
import Explorer from './explorer/Explorer.js';


export default function SideBarComp() {
    const sideBarComp = useSelector((state) => state.sideBarComp.sideBarComp)

    let compSellector = {
        'Explorer': <Explorer />
    }

    // const resizeComp = document.getElementsByClassName('SideBarComp')[0]


    return (
        <div className='SideBarComp'>
            {sideBarComp !== null && compSellector[sideBarComp]}
            {/* <SideBarCompResizeBar resizeComp={resizeComp} /> */}
        </div>
    )
}
