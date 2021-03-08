export const ADD_TODO = "ADD_TODO";

export const addTodo = (data) => {

   if(data  === ""){
      return {
        type: ADD_TODO,
        data : {id : 1 , buah : ' "blank" '}
      }
     }

    return {
        type: ADD_TODO,
        data : {id : 1 , buah : data}
    }
}
