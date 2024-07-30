 export const addEntryRedux = (payload_add) =>{
    return {type : 'ADD_ENTRY', payload:payload_add};
  }
  
  export const removeEntryRedux = (id) => {
    return {type:'REMOVE_ENTRY' , payload:{id}}
  }