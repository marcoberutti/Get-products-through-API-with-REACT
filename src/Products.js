import products from "./data/product";
import Product from "./Product";

function Products({category}) {

  let productList = products
  .filter(product => product.category === category)
  .map(product => <Product product={product} key={product.id}/>);

  return (
    <div className="productsContainer">
      <h2>Products:</h2>
      <div className="productsFlex">
        {productList.length > 0 ? productList : <p>No products found.</p>}
      </div>
    </div>
  );
}

export default Products;
