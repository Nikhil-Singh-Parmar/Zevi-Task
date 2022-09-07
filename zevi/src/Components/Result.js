import data from '../data';
import Rating from'./Rating';
import {useState}  from 'react'
import { RiSearchLine } from 'react-icons/ri';
import Heading from './Heading'
import Card from './Card'



function Result(props){
    
    const [searchData,setsearchData] = useState("");
    const [suggestion,setsuggestion] = useState(false);

    function handleBrand(brand){
        const filterByBrand = props.carddata.filter((item)=>{
         if(brand===item.brand){
           return item;
         }
       })
       props.setCard(filterByBrand);
      }
      function handleClick(){
       const filteredData = props.carddata.filter((item)=>{
        if(props.searchValue===item.title){
          return item;
        }
      })
      props.setCard(filteredData);
      }
      
      function handleRating(rating){
        const filterByRating = props.carddata.filter((item)=>{
         if(rating===item.rating){
           return item;
         }
       })
       props.setCard(filterByRating);
      }
      function handlePrice(low,high){
        const filterByPrice = props.carddata.filter((item)=>{
         if(item.discountPrice<=high && item.discountPrice>=low){
           return item;
         }
       })
       props.setCard(filterByPrice);
      }
    return(
        <div>
    <div className='searchbar-mini'>
      <input
       className='input-mini searchbar-mini' 
       type='text' 
       placeholder = 'Search'
       onChange={(e)=>props.setSearchValue(e.target.value)}></input>
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
      { props.carddata.length?props.carddata.map((product) => {
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
      :<h1>No Product Is Found With Given Input</h1>}
        </div>
     </div>
  </div>
    )
}
export default Result