import suggestiondata from "../suggestiondata";
import SmallCard from "./SmallCard";
function SuggestionBox(){
    return (
        <>
        <div className="suggestion-body box">
<div className="suggest-heading1">
Latest Trends
</div>

<div className="suggest-data">
{suggestiondata.map((product) => {
        return(
            <SmallCard key={product.id} img={product.img} title={product.title}/>
        )      
     })
    }
</div>
<div className="suggest-heading2">
Popular suggestions
</div>
<div className="suggest-values">
High Neck
</div >
<div className="suggest-values">
Winter Jacket
</div>
<div className="suggest-values">
Slim Suit
</div>
<div className="suggest-values">
Printed Shirt
</div>
        </div>
        </>
    )
}
export default SuggestionBox;