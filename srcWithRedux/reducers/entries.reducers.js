


const reducer= (state = initialEntires, action)=>{
    let newEntries;
    switch(action.type){
      case 'ADD_ENTRY':
         newEntries = state.concat({...action.payload});
        return newEntries;
        break;
      case 'REMOVE_ENTRY':
         newEntries = state.filter(
          (entry) => entry.id !== action.payload.id
        );  
        return newEntries;
        default:
          return state;
    }
  };

  export default reducer;

  var initialEntires=[
    {
    id:1,
    description: "Company Income",
    value: 5334,
    isExpense: false
  },
  {
    id:2,
    description: "water Bill",
    value: 340,
    isExpense: true
  },
  {
    id:5,
    description: "post come",
    value: 540,
    isExpense: false
  },
  {
    id:3,
    description: "Rent Bill",
    value: 540,
    isExpense: true
  },
  {
    id:4,
    description: "power Bill",
    value: 540,
    isExpense: true
  }
  ]