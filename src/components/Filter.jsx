/* eslint-disable react/prop-types */
import { useState } from "react";

const Filter = ({ onFilter }) => {
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleFilter = () => {
    // console.log(brand, category, minPrice, maxPrice);
    onFilter({ brand, category, minPrice, maxPrice });
  };

  return (
    <div>
      <h2 className="text-primary font-bold text-4xl text-center mb-7">
        Filter Products
      </h2>
      <div className="flex md:flex-row flex-col  md:items-end items-center justify-center md:gap-2 gap-1">
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Brand Name</span>
            </div>
            <input
              type="text"
              value={brand}
              placeholder="Type BrandName Ex: Asus"
              className="input input-bordered input-info w-full max-w-xs "
              onChange={(e) => setBrand(e.target.value)}
            />
          </label>
        </div>

        {/* Category */}

        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Category:</span>
            </div>
            <input
              type="text"
              value={category}
              placeholder="Type Category Ex: Laptop"
              className="input input-bordered input-info w-full max-w-xs"
              onChange={(e) => setCategory(e.target.value)}
            />
          </label>
        </div>

        {/* Min Price */}
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Min Price</span>
            </div>
            <input
              type="number"
              value={minPrice}
              placeholder="Type Min Price"
              className="input input-bordered input-info w-full max-w-xs"
              onChange={(e) => setMinPrice(e.target.value)}
            />
          </label>
        </div>

        {/* max price */}
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Max Price</span>
            </div>
            <input
              type="number"
              value={maxPrice}
              placeholder="Type Max Price"
              className="input input-bordered input-info w-full max-w-xs"
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </label>
        </div>

        <div>
          <button className="btn btn-primary" onClick={() => handleFilter()}>
            Apply Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
