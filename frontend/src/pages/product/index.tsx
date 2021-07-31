import './index.css'
import ProductItem from './ProductItem'
import { useEffect, useState } from 'react'
import { IProduct } from '../../typings'
import { API } from '../../api'
import { useRef, KeyboardEvent } from 'react'

const Product = (props: any) => {
  const [products, setProducts] = useState<IProduct[]>([])

  const inputRef: React.LegacyRef<HTMLInputElement> = useRef(null)

  useEffect(() => {
    ;(async () => {
      let products
      if (props && Object.keys(props.match.params).length > 0) {
        const category = props.match.params.category
        products = await (await API.getProductsWithCategory(category)).data
      } else {
        const { fruits, vegetables } = await (products = await (await API.getAllProducts()).data)
        products = [...vegetables, ...fruits]
      }
      setProducts(products)
    })()
  }, [])

  const updateInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    inputRef.current!.value = e.target.value
  }

  const handleKeyPress = async (e: KeyboardEvent<HTMLInputElement>): Promise<void> => {
    if (e.key == 'Enter') {
      const products = await (await API.getProductsWithKeyword(inputRef.current!.value.trim())).data
      setProducts(products)
    }
  }

  return (
    <>
      <div className="container bootdey">
        <div className="col-md-3">
          <section className="panel">
            <div className="panel-body">
              <input
                ref={inputRef}
                onChange={updateInput}
                onKeyPress={handleKeyPress}
                type="text"
                placeholder="Keyword Search"
                className="form-control"
              />
            </div>
          </section>
          <section className="panel">
            <header className="panel-heading">
              <a href="/product" className="active">
                <i className="fas fa-seedling"></i>
                Grocery
              </a>
            </header>
            <div className="panel-body">
              <ul className="nav prod-cat">
                <li>
                  <a href="/product/fruits" className="active">
                    <i className="far fa-lemon"></i> Fruits
                  </a>
                </li>
                <li>
                  <a href="/product/vegetables">
                    <i className="fas fa-carrot"></i> Vegetables{' '}
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
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
