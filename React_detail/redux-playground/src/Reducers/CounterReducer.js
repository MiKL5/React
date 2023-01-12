const INITIIAL_STATE ={
    count:0
}

// state = initial_state et prend des actions sur le state
export default function CounterReducer(state = INITIIAL_STATE, action) {
    //
    console.log(state);
    return state;
}