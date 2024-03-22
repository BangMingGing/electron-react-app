// Action Types
const SET_CURRENT_FILE = 'SET_CURRENT_FILE'


// Action Create Function
export const setCurrentFile = (fileInfo) => (
    {
        type: SET_CURRENT_FILE,
        payload: {
            fileInfo: fileInfo
        }
    }
)


// Init State
const initialState = {
    currentFile: null
}


// Reducer
export default function currentFile(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_FILE:
            return {
                currentFile: action.payload.fileInfo
            }
        default:
            return state
    }
}