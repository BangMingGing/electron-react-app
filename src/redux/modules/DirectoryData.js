// Action Types
const SET_DIRECTORY_DATA = 'SET_DIRECTORY_DATA'


// Action Create Function
export const setDirectoryData = (directoryData) => (
    {
        type: SET_DIRECTORY_DATA,
        payload: {
            directoryData: directoryData
        }
    }
)


// Init State
const initialState = {
    directoryData: null
}


// Reducer
export default function directoryData(state = initialState, action) {
    switch (action.type) {
        case SET_DIRECTORY_DATA:
            return {
                directoryData: action.payload.directoryData
            }
        default:
            return state
    }
}