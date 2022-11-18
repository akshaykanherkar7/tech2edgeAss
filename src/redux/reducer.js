import * as types from "./action.types"

const initialstate={
    isLoading:false,
    isError:false,
    allCharacter:[],
    allSeries:[]
};

export const reducer=(state=initialstate,{type,payload})=>{
    switch(type){
        case types.GET_DATA_REQUEST:{
            return {...state,isLoading:true,isError:false}
        }
        case types.GET_DATA_SUCCESS:{
            return {...state,isLoading:false,isError:false,allCharacter:payload.characters, allSeries:payload.series}
        }
        case types.GET_DATA_FAILURE:{
            return {...state,isLoading:false,isError:true}
        }
         default: {
            return state;
        }
    }
}