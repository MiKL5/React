// le communauté React en a créer dispo sur Internet
import {useState, useEffect} from 'react';


export default function useDimension() {
    const [dimension, setDimension] = useState();
    useEffect(() => {
        window.addEventListener('resize', resizeFunc);
        // la dimension sera actualisée avec la largeur du navigateur
        function resizeFunc() {
            setDimension(window.innerWidth)
        }
        // la clean funcion sera utile qd le composant va se détruire
        return () => {
            window.addEventListener('resize', resizeFunc);
        }
    }, []);
    return dimension;
}
// on a parfois besoin de connaître la largeur de cetaine chose notment en js