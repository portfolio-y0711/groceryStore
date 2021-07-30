const NavBar = () => {
  return (
    <div className="navbar navbar-default navbar-static-top">
      <div className="container bootstrap snippets bootdey">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="/">
            Grocery Store
          </a>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="#">인증받기</a>
            </li>
            <li>
              <a href="/product">상품보기</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
