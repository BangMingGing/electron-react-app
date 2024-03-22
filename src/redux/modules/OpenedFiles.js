// Action Types
const ADD_OPENED_FILE = 'ADD_OPENED_FILE'
const REMOVE_OPENED_FILE = 'REMOVE_OPENED_FILE'


// Action Create Function
export const addOpenedFile = (newFileData) => (
    {
        type: ADD_OPENED_FILE,
        payload: {
            newFileData: newFileData
        }
    }
)

export const closeOpenedFile = (fileInfo) => (
    {
        type: ADD_OPENED_FILE,
        payload: {
            fileInfo: fileInfo
        }
    }
)


// Init State
const initialState = {
    openedFiles: []
}


// Reducer
export default function openedFiles(state = initialState, action) {
    switch (action.type) {
        case ADD_OPENED_FILE:
            const isFileExists = state.openedFiles.some(file => file.path === action.payload.newFileData.path)

            if (!isFileExists) {
                return {
                    openedFiles: [...state.openedFiles, action.payload.newFileData]
                }
            } else {
                return state;
            }

        case REMOVE_OPENED_FILE:
            return {
                openedFiles: state.openedFiles.filter(file => file.path !== action.payload.fileInfo.path)
            }
        default:
            return state
    }
}