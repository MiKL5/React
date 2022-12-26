function Item(props) {
    console.log(props);
    return (
        <h1>{props.txt}</h1>
    )
}
export default Item;
// props signifie propritété
// L'objets contients les "props" que le parent donne à l'enfant (le parent est "app.js")