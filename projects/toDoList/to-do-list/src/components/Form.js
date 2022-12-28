import {useState} from 'react'
import Item from './Item'

export default function Form(){

    const [dataArr, setDataArr] = useState([
        {txt: "Promener le chien"},
        {txt: "Sport"},
        {txt: "Coder avec React"},
    ])
    
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
                {dataArr.map((item,index) => {
                    return( <Item
                        txt={item.txt}
                        key={index}
                        // id={index}
                        // del={delete}
                        /> )
                })}
            </ul>
        </div>
    )
}
// htmlFor est l'attribut For en syntaxe JSX