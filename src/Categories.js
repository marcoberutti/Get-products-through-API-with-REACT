import categories from "./data/categories";

function Categories({handleClick}) {

  let categoriesList = categories.map(
    (category) => {
      return(
        <button onClick={() => handleClick(category)} key={category}>{category}</button>
      )
    })
  return (
    <div>
      <h2>Categories:</h2>
      <div className="categoriesContainer">
      {categoriesList}
      </div>
    </div>
  );
}

export default Categories;
