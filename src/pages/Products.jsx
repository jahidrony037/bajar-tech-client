import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "./pagination/Pagination";
import Product from "./Product";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [searchText, setSearchText] = useState("");

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

  // console.log(searchText);

  const handleSearchProducts = (text) => {
    axios
      .get(`https://bajar-tech-server.vercel.app/products/search?name=${text}`)
      .then((res) => {
        setProducts(res.data);
      });
  };

  const handleSort = (url) => {
    // .get(`https://bajar-tech-server.vercel.app/products/sort`)
    axios
      .get(`https://bajar-tech-server.vercel.app/products/sort?order=${url}`)
      .then((res) => {
        setProducts(res.data);
      });
  };

  return (
    <div>
      <p className="text-center text-4xl font-bold py-5">All Products</p>

      {/* search */}
      <div>
        <div className="form-control">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search by product name"
              className="input input-bordered"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              onClick={() => handleSearchProducts(searchText)}
              className="btn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Sorting Dropdown */}
      <div className="dropdown dropdown-hover">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1 bg-primary hover:bg-primary text-white"
        >
          Sort by Price
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 pl-0 bg-base-100 rounded-box w-52 space-y-2"
        >
          <li
            className="btn hover:bg-primary hover:text-[#FFFF]"
            onClick={() => handleSort("asc")}
          >
            Low to High
          </li>
          <li
            className="btn hover:bg-primary hover:text-[#FFFF]"
            onClick={() => handleSort("desc")}
          >
            High to Low
          </li>
        </ul>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 justify-items-center mt-40">
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
