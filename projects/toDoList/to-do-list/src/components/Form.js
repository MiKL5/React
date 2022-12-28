import {useState} from 'react' // le state est utilisable autant que c'est nécessaire
import Item from './Item'
import {v4 as uuidv4} from 'uuid'

export default function Form(){

    const [dataArr, setDataArr] = useState([
        // {txt: "Promener le chien", id: uuidv4()},
        // {txt: "Sport", id: uuidv4()},
        // {txt: "Coder avec React", id: uuidv4()},
    ])
    // console.log(uuidv4())

    const [stateInput, setStateInput] = useState();

    const deleteElement = id =>{
        console.log(id);
        // filter les élément aprés la suppression en ne gardant que ceux qui ne sont pas supprimés
        const filteredState = dataArr.filter(item => {
            return item.id !== id;
        })
        setDataArr(filteredState)
    }// L'immutabilité (avec React) dataArr n'est jamais changer directement. Un nouveau tableau est retourné. Et ça évite à React de chercher à savoir ce qui a été mis à jour.

    // le bouton ajoute l'élément
    const addTodo = e =>{
        e.preventDefault(); // prévient le comportement pad défaut d'actualiser la page. Donc évite que la page se mette à jour à chaque envoi du formulaire
        // nv tableau
        const newArr = [...dataArr] // srtt si c'est un tableau ou un objet retour d'un nv state, avec une copie du state, plus ce qui va changer
        const newTodo = {}; // nv objet
        newTodo.txt = stateInput;
        newTodo.id = uuidv4();
        newArr.push(newTodo); // envoi dans dataArr
        setDataArr(newArr); // change le state avec des données fraiches dans le tableau
        setStateInput(''); // la case se vide après envoi
    }

    const linkedInput = e => {
        console.log(e);
        setStateInput(e);
    }

    return(
        // Le contenu visuel
        <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
            <form onSubmit={e => addTodo(e)} className='mb-3'>
                <label htmlFor="todo" className="form-label mt-3">Tâche à faire</label>
                <input 
                value={stateInput}
                onChange ={e => linkedInput(e.target.value) }
                type="text" 
                className="form-control" 
                id="todo" />
                <button className="mt-2 btn btn-primary d-block">Envoyer</button>
            </form>

            <h2>Liste des tâches</h2>
            <ul className="list-group">
                {dataArr.map((item) => {
                    return( <Item
                        txt={item.txt}
                        key={item.id}
                        id={item.id}
                        delFunc={deleteElement}
                        /> )
                })}
            </ul>
        </div>
    )
}
// htmlFor est l'attribut For en syntaxe JSX