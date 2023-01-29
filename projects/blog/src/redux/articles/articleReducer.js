const INITIAL_STATE = {
    articles: []
}

export default function articleReducer(state = INITIAL_STATE, action) {
    switch(action.type){
        case "LOADARTICLES" : {
            return {
                ...state,
                articles: action.payload
            }
        }
    }
    return state;
}

export const getArticless = () => dispatch => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        dispatch({
            type: 'LOADARTICLES',
            payload: data
        })
    })
}