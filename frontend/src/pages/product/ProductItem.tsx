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
      <div className="col-md-4">
        <section className="panel">
          <div className="pro-img-box">
            <img
              src={`http://localhost:8080/static/images/${image}.jpg`}
              height="200"
              width="220"
              alt=""
            />
            <br />
            {/*
            <a href="#" className="adtocart">
              <i className="fa fa-shopping-cart"></i>
            </a>
            */}
          </div>

          <div className="panel-body text-center">
            <h4>
              <a href={`/product/${category}/${uuid}`} className="pro-title">
                {name}
              </a>
            </h4>
            <p className="price">{price}</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductItem;
