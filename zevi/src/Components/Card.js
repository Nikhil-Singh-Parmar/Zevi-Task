function Card(props){
 return(
    <>
   <div className="img">
   <img src={props.img} style={{height:"200px"}}></img>
   </div>
    <div className="title">
        {props.title}
    </div>
    <div className="price">
        {props.price}
    </div>
    <div className="rating"></div>
    </>
 )
}
export default Card