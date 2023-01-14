const INITIAL_STATE ={
    count:0
}

// state = initial_state et prend des actions sur le state
export default function CounterReducer(state = INITIAL_STATE, action){

    //
    console.log(state);
    return state;
}
// Reducer est une fonction qui prend un state est le change