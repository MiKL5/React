import {useState, useEffect} from 'react'

export default function Timer() {
    const [timer, setTimer] = useState(1)

    useEffect(() => {
        const intervalID=  setInterval(() => {
        setTimer(timer => timer + 1)
        }, 1000)
        
        return () => {
            clearInterval(intervalID);
            }
    }, [])

    return (
        <>
            <h1>{timer}</h1>
        </>
    );
}
//<Fragment> et </Fragment> = <> et </>, sans le mot 'Fragment' il n'est plus utilie d'importer 'Fragment'