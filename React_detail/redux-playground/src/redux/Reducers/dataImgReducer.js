const INITIAL_STATE = {
    imgURL: ""
}

export default function dataImgReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case 'LOADIMG': {
            return {
                ...state,
                imgURL: action.payload
            }
        }
    }
    return state;
}

export const getCatImg = () => dispatch => { // getCatImg cherche des images et les reçoit de façon asynchrone et fait un nouveau dispatch
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response =>  response.json()) // réponse dans un fichier json
    .then(data => {
        dispatch({
            type: 'LOADIMG',
            payload: data[0].url
        })
    })
}