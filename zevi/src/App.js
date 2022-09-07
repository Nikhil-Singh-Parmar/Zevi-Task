import './App.css';
import React,{useState}  from 'react'
import Homepage from './Components/Homepage';
import Result from './Components/Result'



function App() {
  const [activeSearch,setactiveSearch] = useState(false);
  const [searchValue,setSearchValue] = useState("");
  function handleSearch(val){
    setSearchValue(val);
    console.log(searchValue);
  }
  return (
    <>
  {
  activeSearch ?
 
  <Result setSearchValue={handleSearch}/>
  : 
  <Homepage handleSearch={setactiveSearch} setSearchValue={handleSearch}/>
  
  }
  
    </>
  );
}

export default App;
