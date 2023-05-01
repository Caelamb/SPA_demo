import {GET_USERS} from "../actions";

let initialState = {
    allUsers: []
};

const rootReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_USERS:
            return {
                ...state,//siempre devolver todo el estado y despues modificar lo que queramos
                allUsers: action.payload,
            }
        default:
            return state; 
    }
};

export default rootReducer;