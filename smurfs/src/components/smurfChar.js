import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { getSmurfs } from '../Actions/actions';
import smurfCard from './smurfcard';

const SmurfChar = props => {
    const dispatch = useDispatch();
        const fetchSmurf = e => {
            e.prevent.default();
            dispatch(getSmurfs());
        }
        console.log(props.smurfs)

        return (
            <div className="title">
                <h2>Smurf Village</h2>
                <smurfCard characters={props.smurfs} />
            </div>
        )
};

const mapStateToProps = state =>
{
    return(
        {
        smurfs:state.smurfs,
        error: state.error
        }
    )
}


export default connect( mapStateToProps, {getSmurfs}) (SmurfChar);
