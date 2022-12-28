import {useState} from 'react'
import Item from './Item'
import {v4 as uuidv4} from 'uuid'

export default function Form(){

    const [dataArr, setDataArr] = useState([
        {txt: "Promener le chien", id: uuidv4()},
        {txt: "Sport", id: uuidv4()},
        {txt: "Coder avec React", id: uuidv4()},
    ])
    // console.log(uuidv4())

    const deleteElement = id =>{
        console.log(id);
        // filter les élément aprés la suppression en ne gardant que ceux qui ne sont pas supprimés
        const filteredState = dataArr.filter(item => {
            return item.id !== id;
        })
        setDataArr(filteredState)
    }// L'immutabilité (avec React) dataArr n'est jamais changer directement. Un nouveau tableau est retourné. Et ça évite à React de chercher à savoir ce qui a été mis à jour.

    return(
        // Le contenu visuel
        <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
            <form className='mb-3'>
                <label htmlFor="todo" className="form-label mt-3">Tâche à faire</label>
                <input type="text" className="form-control" id="todo" />
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