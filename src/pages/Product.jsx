/* eslint-disable react/prop-types */
const Product = ({ product }) => {
  //   console.log(product);

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={product.image} alt={product.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>{product?.description}</p>
        <p>Price: ${product?.price}</p>
        <p>Category: {product?.category}</p>
        <p>Brand: {product?.brand}</p>
        <p>Rating: {product?.ratings} ⭐</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
