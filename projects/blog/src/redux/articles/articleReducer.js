const INITIAL_STATE = {
    articles: []
}

export default function articleReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case "LOADARTICLES": {
            return {
                ...state,
                articles: action.payload
            }
        }
    }
    return state;
}

export const getArticles = () => dispatch => { // Cette fonciton retourne une fonction qui donne accés à dispatch
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json()) // puis on reçoit une réponse qu'on met dans un fichier JSON
    .then(data => {
        dispatch({
            type: 'LOADARTICLES',
            payload: data
        })
    })
}