import axios from 'axios'
import ProductItem from './ProductItem'
import { api } from '../../api'
import { useEffect, useState } from 'react'
import {IProduct} from '../../typings'

const Product = () => {
  const [products, setProducts] = useState({
    fruits: [],
    vegetables: []
  })

  useEffect(() => {
    (async () => {
      const fruits = await (await fetch(
        'http://localhost:8080/api/fruits', {
          method: 'GET'
        }
      )).json()
      console.log(fruits[0])
      const vegetables = await (await fetch(
        'http://localhost:8080/api/vegetables', {
          method: 'GET'
        }
      )).json()
      setProducts({
        fruits,
        vegetables
      })
    })()
  }, [])

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
                Grocery
            </header>
            <div className="panel-body">
                <ul className="nav prod-cat">
                    <li>
                      <a href="#" className="active">
                        <i className=""></i> Fruits</a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-carrot">
                        </i> Vegetables </a>
                    </li>
                </ul>
            </div>
        </section>
    </div>
    <div className="col-md-9">
        <div className="row product-list">
          { ([
            ...products.fruits,
            ...products.vegetables
          ] as IProduct[]).map((product, index) => {
              return (<ProductItem
                key={index}
                uuid={product.uuid}
                name={product.name}
                price={product.price}
              />)
          })}
        </div>
    </div>
</div>

</>)
}

export default Product

