import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { API } from '../../../api'

interface IProductInfo {
  name: string;
  image: string;
  description: string;
  unitPrice: number;
  bundlePrice: number;
  categories: [];
  tags: [];
}

const ProductDetail = (props: any) => {
  const [productInfo, setProductInfo] = useState<IProductInfo>();

  useEffect(() => {
    (async () => {

      const category = props.match.params.category
      const uuid = props.match.params.id
      const productInfo: IProductInfo = await (await (API.getProductWithCategoryAndUuid(category, uuid))).data
      setProductInfo(productInfo);
    })();
  }, []);

  return productInfo ? (
    <>
      <div className="container bootdey">
        <div className="col-md-12"> </div>
        <section className="panel">
          <div className="panel-body">
            <div className="col-md-6">
              { /*
              <a href="/product" className="adtocart">
                <i className="fa fa-backward">상품 카테고리로 돌아가기</i>
              </a>
                 */
              }
              <Link to={"/product"}>
                상품 카테고리로 돌아가기
              </Link>
              <div className="pro-img-details">
                <img
                  src={`http://localhost:8080/static/images/${productInfo?.image}.jpg`}
                  width={520}
                  height={300}
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6">
              <h4 className="pro-d-title">
                <a href="#" className="">
                  {productInfo?.name}
                </a>
              </h4>
              <p>{productInfo?.description}</p>
              <div className="product_meta">
                <span className="posted_in">
                  <strong>Tags:</strong>
                  {productInfo?.tags.map((tag, index, arr) => {
                    if (index < arr.length - 1) {
                      return (
                        <React.Fragment key={index}>
                          <a rel="tag" href="#">
                            {tag}
                          </a>
                          ,
                        </React.Fragment>
                      );
                    } else {
                      return (
                        <a key={index} rel="tag" href="#">
                          당일배송
                        </a>
                      );
                    }
                  })}
                </span>
                <br />
              </div>
              <div className="m-bot15">
                {" "}
                <strong>Price : </strong> <br />
                <span className="amount-old">
                  단품가격: {productInfo?.unitPrice}
                </span>{" "}
                <br />
                <span className="pro-price">
                  {" "}
                  상자(1box): {productInfo?.bundlePrice}
                </span>
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
  ) : (
    <></>
  );
};

export default ProductDetail;
