import './App.css';
import React,{useState}  from 'react'
import { RiSearchLine } from 'react-icons/ri';
import Heading from './Components/Heading'
import Rating from './Components/Rating'
import Card from './Components/Card'
import data from './data';


function App() {
  const [searchData,setsearchData] = useState("");
  const [suggestion,setsuggestion] = useState(false);
  const [activeSearch,setactiveSearch] = useState(true);
  const [carddata, setCard] = useState(data);
  const [filteredCardData, setFilteredCard] = useState(carddata);

  function handleClick(){
    setsuggestion(!suggestion);
  }
  function handleBrand(brand){
    const filterByBrand = carddata.filter((item)=>{
     if(brand===item.brand){
       return item;
     }
   })
   setCard(filterByBrand);
  }
  function handleRating(rating){
    const filterByRating = carddata.filter((item)=>{
     if(rating===item.rating){
       return item;
     }
   })
   setCard(filterByRating);
  }
  function handlePrice(low,high){
    const filterByPrice = carddata.filter((item)=>{
     if(item.discountPrice<=high && item.discountPrice>=low){
       return item;
     }
   })
   setCard(filterByPrice);
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
          <Heading name={"BRAND"}/>
          <input type='checkbox' onClick={()=>handleBrand("Mango")}/> Mango 
          <br/>
          <input type='checkbox' onClick={()=>handleBrand("H&M")}/> H&M
          <Heading name={"PRICE RANGE"}/>
          <input type='checkbox'value="500"onClick={()=>{handlePrice(0,500)}}/> Under 500
          <br/>
          <input type='checkbox' value="1000-4000" onClick={()=>{handlePrice(1000,4000)}}/> 1000 - 4000
          <Heading name={"RATINGS"}/>
          <input type='checkbox' value="5" onClick={()=>handleRating("5")}/> <Rating val="5"/> <br/>
          <input type='checkbox'value="4" onClick={()=>handleRating("4")}/> <Rating val="4"/> <br/>
          <input type='checkbox' value="3" onClick={()=>handleRating("3")}/> <Rating val="3"/> <br/>
          <input type='checkbox' value="2" onClick={()=>handleRating("2")} /> <Rating val="2"/> <br/>
          <input type='checkbox' value="1" onClick={()=>handleRating("1")}/> <Rating val="1"/>
        </div>
        <div className='result-data'>
       {/* <Card 
       img={"https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"} 
       title = {"Ripped Jeans"}
       actualPrice = {1290}
       discountPrice = {1250}
       rating = {2}
       userVoted = {120}
       clicked ={false}
       /> */}
       {carddata.map((product) => {
        
        return(
         <Card 
         key={product.id}
         title={product.title}
         actualPrice={product.actualPrice}
         discountPrice={product.discountPrice}
         rating={product.rating}
         userVoted={product.userVoted}
         img={product.img}
         />
        )
       
     })
     }
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
