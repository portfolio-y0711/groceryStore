const ProductItem = ({ name, price }: { name: string, price: number }) => {
  return (
    <>
            <div className="col-md-4">
                <section className="panel">
                    <div className="pro-img-box">
                        <img src="https://via.placeholder.com/250x220/FFB6C1/000000" alt="" />
                        <a href="#" className="adtocart">
                            <i className="fa fa-shopping-cart"></i>
                        </a>
                    </div>

                    <div className="panel-body text-center">
                        <h4>
                            <a href="#" className="pro-title">
                              {name}
                            </a>
                        </h4>
                        <p className="price">{price}</p>
                    </div>
                </section>
            </div>
          </>
  )
}

export default ProductItem
