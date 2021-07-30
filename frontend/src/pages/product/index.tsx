
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
                              신고산 배 
                            </a>
                        </h4>
                        <p className="price">10,000</p>
                    </div>
                </section>
            </div>
            <div className="col-md-4">
                <section className="panel">
                    <div className="pro-img-box">
                        <img src="https://via.placeholder.com/250x220/6495ED/000000" alt="" />
                        <a href="#" className="adtocart">
                            <i className="fa fa-shopping-cart"></i>
                        </a>
                    </div>

                    <div className="panel-body text-center">
                        <h4>
                            <a href="#" className="pro-title">
                              나주 배
                            </a>
                        </h4>
                        <p className="price">15,000</p>
                    </div>
                </section>
            </div>
        </div>
    </div>
</div>

</>)
}

export default Product
