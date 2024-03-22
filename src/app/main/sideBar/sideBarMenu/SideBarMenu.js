import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen, faSearch, faCog } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux'

import './SideBarMenu.css'
import { setSideBarComp } from '../../../../redux/modules/SideBarComp';



export default function SideBarMenu() {
    const dispatch = useDispatch()

    function btnOnClick(sideBarComp) {
        dispatch(setSideBarComp(sideBarComp))
    };


    return (
        <div className="SideBarMenu">
            <button className='SideBarBtn' id='Explorer' onClick={() => btnOnClick('Explorer')}>
                <FontAwesomeIcon icon={faFolderOpen} size='2x' />
            </button>
            <button className='SideBarBtn' id='Search' onClick={() => btnOnClick('Search')}>
                <FontAwesomeIcon icon={faSearch} size='2x' />
            </button>
            <button className='SideBarBtn' id='Setting' onClick={() => btnOnClick('Setting')}>
                <FontAwesomeIcon icon={faCog} size='2x' />
            </button>
        </div>
    )
}