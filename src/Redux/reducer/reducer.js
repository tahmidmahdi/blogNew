const initialState = {
    state : []
}
const addState = (state= initialState , action) =>{
    switch(action.type){
        case 'ADD_TO_STATE': {
            const newState = {
                ...state,
                state: [...state.state, action.payload]
            }
            return newState;
        }
        default: {
            return state
        }
    }
    
}
export default addState;