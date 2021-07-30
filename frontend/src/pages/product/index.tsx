import ProductItem from './ProductItem'
import { api } from '../../api'

const Product = () => {
  return (<>
<div className="container bootdey">
    <div className="col-md-3">
        <section className="panel">
            <div className="panel-body">
                <input type="text" placeholder="Keyword Search" className="form-control" />
            </div>
        </section>
        <section className="panel">
            <header className="panel-heading">
                Products
            </header>
            <div className="panel-body">
                <ul className="nav prod-cat">
                    <li>
                      <a href="#" className="active">
                        <i className=""></i> Fruit</a>
                    </li>
                    <li>
                        <a href="#"><i className="fas fa-carrot"></i> Grocery</a>
                    </li>
                </ul>
            </div>
        </section>
    </div>
    <div className="col-md-9">
        <div className="row product-list">

          {api.getProducts({ category: "fruits"}).map((fruit, index) => 
            (
              <ProductItem
                key={index}
                name={fruit.name}
                price={fruit.price}
              />)
            )
          }
        </div>
    </div>
</div>

</>)
}

export default Product
