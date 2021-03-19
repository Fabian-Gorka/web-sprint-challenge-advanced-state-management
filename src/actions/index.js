import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERR = "FETCH_ERR";
export const SET_ERR = "SET_ERR"
export const SMURF_ADD = "SMURF_ADD"


//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.

export const fetchSmurfs = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_START });
        axios
            .get(`http://localhost:3333/smurfs`)
            .then((res) => {
                console.log(res.data);
                dispatch({ type: FETCH_SUCCESS, payload: res.data});
            })
            .catch((err) => {
                dispatch({ type: FETCH_ERR, payload: err.message });
            });
    };
};

export const addSmurf = (smurf) => dispatch => {
    axios.post('http://localhost:3333/smurfs', smurf)
    .then((res) => {
        dispatch({ type: FETCH_SUCCESS, payload: res.data })
    })
    .catch(err => {
        dispatch({ type: FETCH_ERR, payload: err.response.data });
    });
}

export const setError = () => dispatch => {
    dispatch({ type: SET_ERR });
} 