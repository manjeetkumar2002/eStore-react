import PageNavigation from "./components/PageNavigation";
import Sort from "./components/Sort";
import ProductList from "./components/ProductList";
import ActiveFilters from "./components/ActiveFilters";
import FilterSection from "./components/FilterSection";
import { useTheme } from "./context/themeContext";
const Category = () => {
  const theme = useTheme()
  return (
    <div>
      <PageNavigation pageName={"Category"} />
      <div className="container-lg my-5">
        <div className="row">
          <div className="col-md-3">
            <FilterSection />
          </div>
          <div className="col-md-9 shadow rounded-3">
            <div className="row">
              <Sort />
            </div>
            <div>
              <ActiveFilters />
            </div>
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
