import Rating from './Rating.js'
import {BsHeart} from 'react-icons/bs'
import {BsHeartFill} from 'react-icons/bs'
import {useState}  from 'react'
function Card(props){
    const [clickHeart, setClickHeart] = useState(false);
    const [activeHover,setActiveHover] = useState(false);
    function hideHover(){
        setActiveHover(false);
    }
    const style1 = {
        backgroundImage: `url(${props.img})`,
        backgroundPosition: 'center center no-repeat',
        height:"260px",
        backgroundSize: 'cover', 
   };
   const styles2 ={
    marginTop:"10px",
   }
 return(
 
    <>
    <div className="card-container" onMouseEnter={e=>setActiveHover(true)} onMouseLeave={hideHover}>
        
   <div style={style1}>
   {  clickHeart?<BsHeartFill className='filled-heart'onClick={(e)=>{setClickHeart(false)}}/> : <BsHeart className='heart-icon'onClick={(e)=>{setClickHeart(true)}}/>}
   <div className={` ${activeHover?"product-visible":"product-hidden"}` }>View Product</div>
   </div>
    <div className="title card-item" style={styles2}>
        {props.title}
    </div>
    <div className="card-item" style={styles2}>
        <span className='strikethrough'>Rs. {props.actualPrice}</span><span className='price'>Rs.{props.discountPrice}</span>
    </div>
    <div className="rating card-item" style={styles2}>
        <Rating val ={props.rating}/> <span className='total-review'>({props.userVoted})</span>
    </div>
    </div>
    </>
 )
}
export default Card