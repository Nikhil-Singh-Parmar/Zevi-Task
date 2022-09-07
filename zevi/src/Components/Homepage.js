import React,{useState}  from 'react'
import { RiSearchLine } from 'react-icons/ri';
function Homepage(props){
  const [searchData,setsearchData] = useState("");
  const [suggestion,setsuggestion] = useState(false);
  
  
  function handleClick(){
    setsuggestion(!suggestion);
  }
    return(
        <div>
   <div className='homepage'>
     <div className='body'>
     <div className='searchbar'>
      <input
       className='input ' 
       type='text' 
       placeholder = 'Search'
       onChange={(e)=>props.setSearchValue(e.target.value)}></input>
      <RiSearchLine 
      className='icon'
       onClick={()=>props.handleSearch(true)}></RiSearchLine>
     </div>
     </div>
    </div>
   </div>
    )
}
export default Homepage