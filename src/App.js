import { useState } from "react";
import Categories from "./Categories";
import Products from "./Products";

function App() {
  const [selectedCategory, setSelectedCategory] = useState('jewelery')

  // function handleClick(category){
  //   setSelectedCategory(category)
  // }

  return (
    <div>
      <Categories handleClick={setSelectedCategory}/>
      <hr/>
      <Products category={selectedCategory} />
    </div>
  );
}

export default App;
