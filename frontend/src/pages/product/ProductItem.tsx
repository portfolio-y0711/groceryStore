import { Link } from 'react-router-dom'
import { API_BASE_URL } from '../../api/index';

const ProductItem = ({
  uuid,
  name,
  category,
  image,
  price,
}: {
  uuid: string;
  name: string;
  category: string;
  image: string;
  price: number;
}) => {
  return (
    <>
      <div className="col-md-4 col-sm-6">
        <section className="panel">
          <div className="pro-img-box">
            <img
              src={`${API_BASE_URL}/static/images/${image}.jpg`}
              height="200"
              width="220"
              alt=""
            />
            <br />
            <a href="#" className="adtocart">
              <i className="fa fa-shopping-cart"></i>
            </a>
          </div>

          <div className="panel-body text-center">
              <Link to={`/product/${category}/${uuid}`} className="pro-title">
                {name}
              </Link>
            <p className="price">{price}</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductItem;
