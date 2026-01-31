import React from "react";
import { useFilterContext } from "../context/filterContext";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filter_products, grid_view } = useFilterContext();

  if (filter_products.length == 0) {
    return (
      <div>
        <h3 className="text-danger">Not Product Found!</h3>
      </div>
    );
  }

  if (grid_view == true) {
    return <GridView products={filter_products} />;
  }
  if (grid_view == false) {
    return <ListView products={filter_products} />;
  }
};

export default ProductList;
