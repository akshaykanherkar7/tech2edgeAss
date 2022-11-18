import * as types from "./action.types"
import axios from "axios"

export const getData=()=>(dispatch)=>{
    dispatch({type:types.GET_DATA_REQUEST})
    axios.get("https://demo.tech2edge.co/samples/data-sg").then((res)=>{
        // console.log(res.data)
        dispatch({type:types.GET_DATA_SUCCESS,payload:res.data})
    }).catch((err)=>{
        console.log(err);
    })
}