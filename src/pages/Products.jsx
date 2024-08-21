import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "./pagination/Pagination";
import Product from "./Product";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const itemsPerPage = 10;

  const fetchProducts = async (page) => {
    const response = await axios.get(
      `https://bajar-tech-server.vercel.app/allProducts?page=${page}&limit=${itemsPerPage}`
    );
    setProducts(response.data.products);
    setTotalPages(response.data.totalPages);
    setCurrentPage(response.data.currentPage);
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 justify-items-center">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Products;
