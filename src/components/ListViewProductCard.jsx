import Star from "../Helper/Star";
const ListViewProductCard = ({ product }) => {
  const {name,description, image, price, id } = product;
  return (
    <div className="col">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-sm-4">
            <img src={image} class="img-fluid rounded-start" style={{maxHeight:"260px",height:"100%",objectFit:"cover",width:"100%"}} alt="..." />
          </div>
          <div className="col-sm-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">
                {description.slice(0,200)}
              </p>
               <h6 className="card-text fw-bold">${price}</h6>
            <Star/>
            <button  style={{ backgroundColor:product.stock>0? '#0a4db8':"",color:product.stock>0? 'white':"" }} className={`btn ${product.stock==0?"text-secondary bg-light":""} `}>
            <i className="bi bi-bag-plus"></i>
            {product.stock>0?" Add to Cart":" Sold Out"}
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListViewProductCard;
