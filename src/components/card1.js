
function Card(props){
    return(
        <div style={{backgroundColor:"pink"}}>
           <h1> {props.title}</h1>
            <p>{props.description}</p>
            <h1 style={{color: "red"}}>I love jewel vai </h1>
        </div>
    )
}
export default Card;