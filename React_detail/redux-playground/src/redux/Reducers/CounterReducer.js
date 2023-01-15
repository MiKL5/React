const INITIAL_STATE ={
    count:0
}

// state = initial_state et prend des actions sur le state
export default function counterReducer(state = INITIAL_STATE, action){
    switch(action.type){
        // INCREMENTER
        case 'INCR': {
          return{ // le state n'est JAMAIS DIRECTEMENT MODIFIER DONC,
            ...state, // le spread operator copie ce qui est dans le state est sera forcément prise en compte, donc passera au dessus de l'autre
            count : state.count + 1 // ajoute 1 à la copie
            }
        }
        // DECREMENTER
        case 'DECR': {
            return{
            ...state,
            count : state.count - 1
            }
        }
    }
    //
    console.log(state);
    return state;
}
// Reducer est une fonction qui prend un state est le change