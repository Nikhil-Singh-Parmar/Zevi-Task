import './App.css';
import React,{useState}  from 'react'
import { RiSearchLine } from 'react-icons/ri';
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
