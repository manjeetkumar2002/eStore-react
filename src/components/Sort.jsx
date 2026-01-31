import React from "react";
import { useFilterContext } from "../context/filterContext";
import { useState } from "react";
const Sort = () => {
  const {
    setGridView,
    setListView,
    grid_view,
    sorting,
    sorting_value,
    searchProduct,
  } = useFilterContext();
  return (
    <div className="row mt-4 mx-auto ">
      {/* col1 */}
      <div className="col-xl-4 col-sm-6">
        <h6 className="mt-2">Search Products</h6>
        <div
          className=" search-container rounded-3 border position-relative overflow-hidden"
          style={{ boxShadow: "2px 2px 10px rgba(0,0,0,0.1)" }}
        >
          <input
            onChange={(e) => {
              searchProduct(e.target.value);
            }}
            id="search-bar"
            className="border-0 bg-transparent p-2 fs-6 shadow-none form-control"
            type="text"
            placeholder="Search for products"
          />
        </div>
      </div>
      {/* col2 */}
      <div className="col-xl-2 col-sm-6">
        <h6 className="mt-2">Price Range</h6>
        <div className="dropdown">
          <button
            style={{ width: "100%" }}
            className="p-2 border bg-white rounded-2 dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            All Prices
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </div>
      </div>
      {/* col3 */}
      <div className="col-xl-2 col-sm-6">
        <h6 className="mt-2">Sort by</h6>
        <form action="#">
          <div className="dropdown">
            <button
              style={{ width: "100%" }}
              className="p-2 border bg-white rounded-2 dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {sorting_value}
            </button>
            <div
              onClick={sorting}
              className="dropdown-menu py-0"
              aria-labelledby="dropdownMenuButton"
            >
              <option value={"lowest"} className="dropdown-item" href="#">
                Price: (lowest)
              </option>
              <option value={"highest"} className="dropdown-item" href="#">
                Price: (highest)
              </option>
              <option value={"a-z"} className="dropdown-item" href="#">
                Price: (a-z)
              </option>
              <option value={"z-a"} className="dropdown-item" href="#">
                Price: (z-a)
              </option>
            </div>
          </div>
        </form>
      </div>
      {/* col4 */}
      <div className="col-xl-2 col-sm-2 col">
        <h6 className="mt-2">View</h6>
        <div className="d-flex gap-2">
          <button
            onClick={setGridView}
            style={{
              backgroundColor: grid_view ? "#0a4db8" : "transparent",
              color: grid_view ? "white" : "black",
            }}
            className="px-2 py-1 border  fs-5 rounded-2"
          >
            <i className="bi bi-grid-3x3-gap-fill"></i>
          </button>
          <button
            onClick={setListView}
            style={{
              backgroundColor: !grid_view ? "#0a4db8" : "transparent",
              color: !grid_view ? "white" : "black",
            }}
            className="px-2 py-1 border  fs-5 rounded-2"
          >
            <i className="bi bi-list-task"></i>
          </button>
        </div>
      </div>
      {/* col5 */}
      <div className="col-xl-2 col-sm-4 col d-flex  align-items-end">
        <div className="dropdown">
          <button
            style={{ width: "100%" }}
            className="p-2 border bg-white rounded-2 dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            12 per page
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sort;
