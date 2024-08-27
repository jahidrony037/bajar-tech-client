import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";

const Home = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await axios.get(
      `https://bajar-tech-server.vercel.app/products/random`
    );
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 justify-items-center mt-40">
        {products?.length ? (
          products?.map((product) => (
            <Product key={product._id} product={product} />
          ))
        ) : (
          <p className="text-primary font-bold text-4xl">no Data Found</p>
        )}
      </div>

      <Link to={"/products"} className="flex justify-center mt-3">
        <button className="btn btn-primary">See All</button>
      </Link>
    </div>
  );
};

export default Home;
