import axios from 'axios';
import {
    FETCHING,
    FETCH_SUCCESSFUL,
    FETCH_FAILED,
    ADD_SMURF,
    SET_ERROR
} from './actionTypes';
export const fetchSmurf=()=>dispatch=>{
    dispatch({type:FETCHING});
    axios.get('http://localhost:3333/smurfs')
    .then((res)=>{
        dispatch({type:FETCH_SUCCESSFUL,payload:res.data});    
    })
    .catch(err=>{
        console.log({err});
        dispatch({type:FETCH_FAILED});
    });
};
export const addSmurf=(smurf)=>{
    return{type:ADD_SMURF,payload:smurf};
};
export const setError=(err)=>{
    return{type:SET_ERROR,payload:err};
};
//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.