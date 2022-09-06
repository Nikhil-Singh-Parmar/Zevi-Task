import './App.css';
import React,{useState}  from 'react'
import { RiSearchLine } from 'react-icons/ri';
function App() {
  const [searchData,setsearchData] = useState("");
  const [suggestion,setsuggestion] = useState(false);

  function handleClick(){
    setsuggestion(!suggestion);
    console.log(suggestion);
  }
  return (
    <>
    <div className='homepage'>
     <div className='body'>
     <div className='searchbar'>
      <input className='input searchbar' type='text' placeholder = 'Search' onChange={e=>setsearchData(e.target.value)}></input>
      <RiSearchLine className='icon' onClick={handleClick} ></RiSearchLine>
     </div>
     </div>
    </div>
    </>
  );
}

export default App;
