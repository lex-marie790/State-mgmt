import {
    ADD_SMURF,
    ADD_SMURF_SUCCESS,
    ADD_SMRUF_FAIL
} from '../Actions/actions';

const intitialState = {
    smurfs: [],
    isFetching: false,
    error:'',
}

function smurfReducer(state=intitialState, action) {
    console.log('Hello', action)
    switch(action.type) {
        case ADD_SMURF:
            return{
                ...state,
                error:'',
                isFetching:true,
            };
        case ADD_SMURF_SUCCESS:
            return{
                ...state,
                smurfs: action.payload,
                error:'',
                isFetching:false,
            };
        case ADD_SMRUF_FAIL:
            return{
                ...state,
                error: action.payload
            }
        default:
            return state
    }
};

export default smurfReducer;