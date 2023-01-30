import { useState } from "react";
import { data } from "./data";
import Buttons from "./Buttons";
import Clothes from "./Clothes";


function Home(){

  const [clothes, setClothes] = useState(data);

  //metod filter - it's gonna help to filter the clothes

  const  chosenClothes = (searchTerm) => {
    const newClothes = data.filter(element => element.searchTerm === searchTerm);
    setClothes(newClothes);
  }
  
  return(
    <div>
      <div className="cont">
      <h2 className="back">Free Standard Shipping</h2>
      </div>
        <Buttons filteredClothes={chosenClothes}/>
        <Clothes loveClothes = {clothes}/>
      </div>
  )
}
export default Home;
