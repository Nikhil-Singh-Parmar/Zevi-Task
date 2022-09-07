function SmallCard(props){
    const style1 = {
        backgroundImage: `url(${props.img})`,
        backgroundPosition: 'center center no-repeat',
        height:"160px",
        backgroundSize: 'cover', 
   };
    return(
        <>
        <div className="card-container">
            
        <div style={style1}>
        </div>
        <div className="suggest-text">
            {props.title}
        </div>
        </div>
        </>

    )
}
export default SmallCard;