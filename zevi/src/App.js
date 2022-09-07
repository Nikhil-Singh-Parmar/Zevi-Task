import './App.css';
import React,{useState}  from 'react'
import Homepage from './Components/Homepage';
import Result from './Components/Result'
import data from './data';



function App() {
  const [activeSearch,setactiveSearch] = useState(false);
  const [searchValue,setSearchValue] = useState("");
  const [carddata, setCard] = useState(data);

  function handleSearch(val){
        setSearchValue(val); 
  }
  function handleActiveSearch(value){
    setactiveSearch(value);
    if(searchValue.length>0 && searchValue!="ALL"){
      const filteredData = carddata.filter((item)=>{
        if(searchValue===item.title){
          return item;
        }
      })
      setCard(filteredData);
    }
    
  }
  
  return (
    <>
  {
  activeSearch ?
 
  <Result searchValue={searchValue} setSearchValue={handleSearch} carddata={carddata} setCard={setCard}/>
  : 
  <Homepage handleActiveSearch={handleActiveSearch} setSearchValue={handleSearch}/>
  
  }
 
    </>
  );
}

export default App;
