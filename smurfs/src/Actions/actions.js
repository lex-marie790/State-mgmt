import axios from 'axios';
export const ADD_SMURF = "ADD_SMURF";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESSFULL";
export const ADD_SMRUF_FAIL = "ADD_SMURF_FAIL";


export const getSmurfs = () => dispatch => {
    dispatch({ ADD_SMURF });
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => 
        dispatch({ ADD_SMURF_SUCCESS, payload: res.data.results })
        )
        .catch(err => dispatch({ type: ADD_SMRUF_FAIL, payload: err }));
};