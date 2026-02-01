import Star from "../Helper/Star";
import { NavLink } from "react-router";
const ListViewProductCard = ({ product }) => {
  const {name,description, image, price, id,rating } = product;
  return (
    <div className="col">
      <div style={{transform:"scale(1)"}} className="card mb-3">
        <div className="row g-0">
          <div className="col-sm-4">
            <img src={image} class="img-fluid rounded-start" style={{maxHeight:"260px",height:"100%",objectFit:"cover",width:"100%"}} alt="..." />
          </div>
          <div className="col-sm-8">
            <div className="card-body">
              <NavLink className={"text-decoration-none"} to={`/singleProduct/${id}`}>
              <h5 className="card-title text-dark">{name}</h5>
              </NavLink>
              <p className="card-text">
                {description.slice(0,200)}
              </p>
               <h6 className="card-text fw-bold">${price}</h6>
               <div className="my-3">
            <Star stars={rating}/>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListViewProductCard;
