import { FETCH_START, FETCH_SUCCESS, FETCH_ERR, SET_ERR, SMURF_ADD } from '../actions/index.js';


export const initialState = {
    smurfs: [],
    isLoading: false,
    error:''
}

const reducer = (state= initialState, action)=>{
    switch(action.type) {
        case FETCH_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                initialState: action.payload,
                error: ''
            }
        case FETCH_ERR:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }   
        case(SMURF_ADD):
            return({
                ...state,
                smurfs:[...state.smurfs,action.payload],
                isLoading:true
            })  
        case(SET_ERR):
        return({
            ...state,
            error: 'Name, Position and NickName Required'
        }) 
        default:
            return state;      
    }
}

export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.