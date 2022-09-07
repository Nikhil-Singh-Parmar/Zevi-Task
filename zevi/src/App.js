import './App.css';
import React,{useState}  from 'react'
import { RiSearchLine } from 'react-icons/ri';
import Heading from './Components/Heading'
import Rating from './Components/Rating'
import Card from './Components/Card'
import Result from './Components/Result'
import data from './data';



function App() {
  const [searchData,setsearchData] = useState("");
  const [suggestion,setsuggestion] = useState(false);
  const [activeSearch,setactiveSearch] = useState(false);
  
  


  function handleClick(){
    setsuggestion(!suggestion);
  }
  

  return (
    <>
  {activeSearch?
  <Result/>
  : <div>
   <div className='homepage'>
     <div className='body'>
     <div className='searchbar'>
      <input
       className='input ' 
       type='text' 
       placeholder = 'Search'
       onChange={e=>setsearchData(e.target.value)}></input>
      <RiSearchLine 
      className='icon'
       onClick={()=>{setactiveSearch(true)}}></RiSearchLine>
     </div>
     </div>
    </div>
   </div>}
    </>
  );
}

export default App;
