function Product({product, index}){
  return(
    <div key={index} className="product">
    <h3>{product.title}</h3>
    <img src={product.image} alt={product.title} />
    <p className="description">{product.description}</p>
    <p className="price">{product.price} €</p>
  </div>
  )
}

export default Product