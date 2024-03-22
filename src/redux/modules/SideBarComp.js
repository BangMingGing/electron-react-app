// Action Types
const SET_SIDE_BAR_COMP = 'SET_SIDE_BAR_COMP'


// Action Create Function
export const setSideBarComp = (sideBarComp) => (
    {
        type: SET_SIDE_BAR_COMP,
        payload: {
            sideBarComp: sideBarComp
        }
    }
)


// Init State
const initialState = {
    sideBarComp: null
}


// Reducer
export default function sideBarComp(state = initialState, action) {
    switch (action.type) {
        case SET_SIDE_BAR_COMP:
            const newSideBarComp = action.payload.sideBarComp === state.sideBarComp ? null : action.payload.sideBarComp;
            return {
                sideBarComp: newSideBarComp
            }
        default:
            return state
    }
}