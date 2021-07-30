import axios from "axios";
import ProductItem from "./ProductItem";
import { api } from "../../api";
import { useEffect, useState } from "react";
import { IProduct } from "../../typings";
import ProductDetail from "./detail/index";

const Product = (props: any) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    (async () => {
      let products;
      if (props && Object.keys(props.match.params).length > 0) {
        const category = props.match.params.category;
        const requestUrl = `http://localhost:8080/api/products/${category}`;
        products = await (
          await fetch(requestUrl, {
            method: "GET",
          })
        ).json();
      } else {
        const { fruits, vegetables } = await (
          await fetch("http://localhost:8080/api/products", {
            method: "GET",
          })
        ).json();
        products = [...fruits, ...vegetables];
      }
      setProducts(products);
    })();
  }, []);

  return (
    <>
      <div className="container bootdey">
        <div className="col-md-3">
          <section className="panel">
            <div className="panel-body">
              <input
                type="text"
                placeholder="Keyword Search"
                className="form-control"
              />
            </div>
          </section>
          <section className="panel">
            <header className="panel-heading">
              <a href="/product" className="active">
                <i className=""></i>
                Grocery
              </a>
            </header>
            <div className="panel-body">
              <ul className="nav prod-cat">
                <li>
                  <a href="/product/fruits" className="active">
                    <i className=""></i> Fruits
                  </a>
                </li>
                <li>
                  <a href="/product/vegetables">
                    <i className="fas fa-carrot"></i> Vegetables{" "}
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
        <div className="col-md-9">
          <div className="row product-list">
            {products.map((product, index) => {
              return (
                <ProductItem
                  key={index}
                  uuid={product.uuid}
                  image={product.image}
                  category={product.category}
                  name={product.name}
                  price={product.price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
