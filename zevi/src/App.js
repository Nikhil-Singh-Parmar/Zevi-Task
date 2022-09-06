import './App.css';
import React,{useState}  from 'react'
import { RiSearchLine } from 'react-icons/ri';
import { AiFillStar } from 'react-icons/ai';
import Heading from './Components/Heading'
import One from './Components/One'
import Two from './Components/Two'
import Three from './Components/Three'
import Four from './Components/Four'
import Five from './Components/Five' 


function App() {
  const [searchData,setsearchData] = useState("");
  const [suggestion,setsuggestion] = useState(false);
  const [activeSearch,setactiveSearch] = useState(true);

  function handleClick(){
    setsuggestion(!suggestion);
    console.log(suggestion);
  }
  return (
    <>
  {activeSearch?
  <div>
    <div className='searchbar-mini'>
      <input
       className='input-mini searchbar-mini' 
       type='text' 
       placeholder = 'Search'
       onChange={e=>setsearchData(e.target.value)}></input>
      <RiSearchLine 
      className='icon-mini'
       onClick={handleClick}></RiSearchLine>
     </div>
     <div className='search-result-body'>
        <div className='sidebar'>
          <div className='heading'>Search Results</div>
          <Heading name={"Brand"}/>
          <input type='checkbox'/> Mango 
          <br/>
          <input type='checkbox'/> H&M
          <Heading name={"Price Range"}/>
          <input type='checkbox'/> Under 500
          <br/>
          <input type='checkbox'/> 1000 - 3000
          <Heading name={"Ratings"}/>
          <input type='checkbox'/> <Five/> <br/>
          <input type='checkbox'/> <Four/> <br/>
          <input type='checkbox'/> <Three/> <br/>
          <input type='checkbox'/> <Two/> <br/>
          <input type='checkbox'/> <One/>
        </div>
        <div className='result-data'>

        </div>
     </div>
  </div>
  : <div>
   <div className='homepage'>
     <div className='body'>
     <div className='searchbar'>
      <input
       className='input searchbar' 
       type='text' 
       placeholder = 'Search'
       onChange={e=>setsearchData(e.target.value)}></input>
      <RiSearchLine 
      className='icon'
       onClick={handleClick}></RiSearchLine>
     </div>
     </div>
    </div>
   </div>}
    </>
  );
}

export default App;
