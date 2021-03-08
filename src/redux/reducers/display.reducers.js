import {ADD_TODO} from './../action/display.action.js';

const startState = [ 
    {id: 2, buah: "jeruk (starting state)"}
 ]

const Buah = (state = startState , action) => {

    console.log("reducers state : " ,state)



    switch(action.type){

        case ADD_TODO:

        console.log("test disini " , startState.length-1 )

        action.data.id = state[state.length-1].id + 1 

            return [
                ...state,
                action.data
            ]

        default:
            console.log("default returning : " ,state)
            return state
    }

}

export default Buah;