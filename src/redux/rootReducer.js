import { combineReducers } from 'redux'

import directoryData from './modules/DirectoryData'
import openedFiles from './modules/OpenedFiles'
import currentFile from './modules/CurrentFile'
import sideBarComp from './modules/SideBarComp'

const rootReducer = combineReducers({
    directoryData,
    openedFiles,
    currentFile,
    sideBarComp
})

export default rootReducer
