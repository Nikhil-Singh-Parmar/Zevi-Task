import { RiArrowDownSLine } from 'react-icons/ri';

function Heading(props){
 return(
    <>
   <div className="header">
   <div className="heading-1">
            {props.name}
    </div>
    <div className="down-arrow"><RiArrowDownSLine/></div>
   </div>
    </>
 )
}
export default Heading