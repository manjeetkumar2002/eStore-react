import React, { useEffect } from "react";
import { useProductContext } from "../context/productContext";
import TestinomialCard from "./TestinomialCard";
const API = "http://localhost:3001";
const Testinomials = () => {
  const { testinomials, getTestinomials } = useProductContext();
  useEffect(() => {
    getTestinomials(API + "/testinomials");
  }, []);
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3  my-5">
      {testinomials.map((currTestinomial, index) => (
        <div key={index} className="col">
          <TestinomialCard index={index} data={currTestinomial} />
        </div>
      ))}
    </div>
  );
};

export default Testinomials;
