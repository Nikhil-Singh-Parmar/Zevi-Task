import One from './One'
import Two from './Two'
import Three from './Three'
import Four from './Four'
import Five from './Five' 

function Rating(props){
    return(
        <>
      {
        props.val==1? <One/> : props.val==2? <Two/>: props.val==3?<Three/>:props.val==4?<Four/>:<Five/> 
      }
        </>
    )
}
export default Rating