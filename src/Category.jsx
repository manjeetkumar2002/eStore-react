import React from 'react'
import PageNavigation from './components/PageNavigation'
import CatergoryFilter from "./components/CatergoryFilter"
import Sort from './components/Sort'
import ProductList from './components/ProductList'
import ActiveFilters from './components/ActiveFilters'
const Category = () => {
  return (
    <div>
        <PageNavigation pageName={"Category"}/>
        <div className="container-lg my-5">
            <div className="row">
              <div className="col-md-4">
                <CatergoryFilter/>
              </div>
              <div className="col-md-8 shadow">
                <div className="row">
                  <Sort/>
                </div>
                <div>
                  <ActiveFilters/>
                </div>
                <ProductList/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Category