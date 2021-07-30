import {useEffect} from "react";

const ProductDetail = (props: any) => {

  useEffect(() => {
    (async() => {

    })()

  })
  
  const productInfo = () => {

  }
  return (
    <>
      <div className="container bootdey">
        <div className="col-md-12"> </div>
        <section className="panel">
          <div className="panel-body">
            <div className="col-md-6">
              <a href="/product" className="adtocart">
                <i className="fa fa-backward">상품 카테고리로 돌아가기</i>
              </a>
              <div className="pro-img-details">
                <img
                  src="https://via.placeholder.com/520x380/FFB6C1/000000"
                  alt=""
                />
              </div>
              <div className="pro-img-list">
                <a href="#">
                  <img
                    src="https://via.placeholder.com/130x100/87CEFA/000000"
                    alt=""
                  />
                </a>
                <a href="#">
                  <img
                    src="https://via.placeholder.com/130x100/FF7F50/000000"
                    alt=""
                  />
                </a>
                <a href="#">
                  <img
                    src="https://via.placeholder.com/130x100/20B2AA/000000"
                    alt=""
                  />
                </a>
                <a href="#">
                  <img
                    src="https://via.placeholder.com/130x100/03FCF8/000000"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <h4 className="pro-d-title">
                <a href="#" className="">
                  상품명
                </a>
              </h4>
              <p>
                상품 상세 설명
              </p>
              <div className="product_meta">
                <span className="posted_in">
                  <strong>Categories:</strong>
                  <a rel="tag" href="#">
                    청과물
                  </a>
                  ,
                  <a rel="tag" href="#">
                    야채{" "}
                  </a>
                  ,
                  <a rel="tag" href="#">
                    당일배송
                  </a>
                </span>
                <br />
                <span className="tagged_as">
                  <strong>Tags:</strong>{" "}
                  <a rel="tag" href="#">
                    mens
                  </a>
                  ,{" "}
                  <a rel="tag" href="#">
                    womens
                  </a>
                  .
                </span>
              </div>
              <div className="m-bot15">
                {" "}
                <strong>Price : </strong>{" "}
                  <br/>
                <span className="amount-old">단품가격: 800</span>{" "}
                  <br/>
                <span className="pro-price"> 상자(1box): 10000</span>
              </div>
              <div className="form-group">
                <label>Quantity</label>
                <input
                  type="quantiy"
                  placeholder="1"
                  className="form-control quantity"
                />
              </div>
              <p>
                <button className="btn btn-round btn-secondary" type="button">
                  <i className="fa fa-shopping-cart"></i> Not Implemented Yet
                </button>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductDetail;
