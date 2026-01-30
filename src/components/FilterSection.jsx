import React from "react";
import { useFilterContext } from "../context/filterContext";

const FilterSection = () => {
  const {
    filters: { category,colors,company },
    all_products,
    updateFilterValue,
    filter_products,
    getUniqueValue,
    clearFilters
  } = useFilterContext();

  
  const categoryData = getUniqueValue(all_products, "category");
  const companyData = getUniqueValue(filter_products, "brand");
  const colorsData = getUniqueValue(filter_products, "colors");
//   console.log("company", colorsData);
  // console.log(categoryData);

  return (
    <div className="filter-section d-flex flex-column gap-4 shadow p-4 rounded-3">
      <div className="category-filter">
        <h3 className="mb-4 fs-5">Category</h3>
        <div className="d-flex flex-column align-items-start gap-1">
          {categoryData.map((curElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={curElem}
                className={`${curElem == category ? "text-primary border-bottom " : "text-secondary"} border-0 bg-transparent fw-semibold fs-6`}
                onClick={updateFilterValue}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </div>

      <div className="company-filter">
        <h3 className="mb-4 fs-5">Company</h3>
        <div>
          <form action="#">
            <select value={company}  style={{width:"200px"}} name="company" id="company" onChange={updateFilterValue}>
              {companyData.map((curElem, index) => {
                return (
                  <option key={index} name="company" value={curElem}>
                    {curElem}
                  </option>
                );
              })}
            </select>
          </form>
        </div>
      </div>

      <div className="colors-filter">
        <h3 className="mb-4 fs-5">Colors</h3>
        <div className="d-flex flex-wrap">
          {colorsData.map((curElem, index) => {
            if(curElem=="All"){
                return (
                     <button
                key={index}
                type="button"
                name="colors"
                value={curElem}
                onClick={updateFilterValue}
                style={{
                  marginRight: "10px",
                  width: "30px",
                  height: "30px",
                }}
                className="border-0 bg-transparent fs-6"
              >All</button>
                )
            }
            return (
              <button
                key={index}
                type="button"
                name="colors"
                value={curElem}
                onClick={updateFilterValue}
                style={{
                  marginRight: "10px",
                  backgroundColor: curElem,
                  width: "30px",
                  height: "30px",
                  opacity:curElem===colors?"1":"0.8"
                }}
                className="border-1 rounded-circle"
              >{curElem === colors?<i className="bi bi-check text-primary"></i>:""}</button>
            );
          })}
        </div>
      </div>


      <div className="clear-filter">
          <button onClick={clearFilters}  className="btn btn-danger w-50">Clear</button>
      </div>
    </div>
  );
};

export default FilterSection;
