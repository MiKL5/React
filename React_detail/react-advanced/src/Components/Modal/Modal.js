import React, {useState} from 'react'
import "./Modal.css"

export default function Modal() {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal)
    }
    return (
        <>
            <button onClick={toggleModal} className="btn-modal">Open</button>
            {modal &&
                <div className="overlay">
                    <div className="modal">
                        <div className="modal-content">
                            <h2>Hello Modale</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, eum corporis, harum ducimus consequuntur totam ipsa corrupti, modi quia aliquid unde optio dolorem dolorum molestias ratione temporibus consectetur earum quos voluptatem assumenda. Unde debitis expedita alias odio odit animi eligendi repellendus recusandae fugiat quis, tempore vero cum esse adipisci ad.</p>
                            <button onClick={toggleModal} className="close-modal">CLOSE</button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
// 95% du temps avec React, pour faire une animation, modification, suppression, un ajout il faut utiliser 'state' 