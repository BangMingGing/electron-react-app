import { useSelector } from 'react-redux';

import './SideBar.css'
import SideBarMenu from './sideBarMenu/SideBarMenu.js';
import SideBarComp from './sideBarComp/SideBarComp.js';


export default function SideBar() {
    const sideBarComp = useSelector((state) => state.sideBarComp.sideBarComp)
    
    return (
        <div className='SideBar'>
            <SideBarMenu />
            {sideBarComp && (
                <>
                    <div style={{width: '1px', height: '100%', backgroundColor: '#666'}} />
                    <SideBarComp />
                </>
            )}
        </div>
    )
}
