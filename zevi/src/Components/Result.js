import data from '../data';
import Rating from'./Rating';
import {useState}  from 'react'
import { RiSearchLine } from 'react-icons/ri';
import Heading from './Heading'
import Card from './Card'



function Result(){
    const [carddata, setCard] = useState(data);
    const [searchData,setsearchData] = useState("");
    const [suggestion,setsuggestion] = useState(false);

    function handleBrand(brand){
        const filterByBrand = carddata.filter((item)=>{
         if(brand===item.brand){
           return item;
         }
       })
       setCard(filterByBrand);
      }
      function handleClick(){
        setsuggestion(!suggestion);
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
    return(
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
    )
}
export default Result