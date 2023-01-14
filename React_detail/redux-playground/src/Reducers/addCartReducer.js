const INITIAL_STATE ={
    cart:0
}

// state = initial_state et prend des actions sur le state
export default function AddCartReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case 'ADDCART': {
          return{ // le state n'est JAMAIS DIRECTEMENT MODIFIER DONC,
            ...state, // le spread operator copie ce qui est dans le state est sera forcément prise en compte, donc passera au dessus de l'autre
            cart : action.payload // cart récupère les données
            }
        }
    }
    //
    console.log(state);
    return state;
}
// Reducer est une fonction qui prend un state est le change
// Eviter de tout mettre dans le même switch pour ne pas en faire une usine à gaz