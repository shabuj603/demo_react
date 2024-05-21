
import '../index'
function Card(props){
  console.log(props);
  return <div className='card'>
  <p className="cardtitle"> {props.titleText}</p>
<h2 className="carddesc">{props.description}</h2>
<p className='cardfooter'>{props.cardFooter}</p>
  </div>
}
export default Card;