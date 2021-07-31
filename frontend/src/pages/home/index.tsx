import { AuthContext } from "../../store";
import { useContext } from "react";
import { Redirect } from 'react-router'

const Home = () => {
  const { store, dispatch } = useContext(AuthContext)!;
  if (!store.islogined) {
    return (
      <>
        <div className="container bootdey">
          <div className="col-md-1">
            <img
              src="http://localhost:8080/static/images/store.jpg"
              width={1000}
              height={500}
            />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <Redirect to="/product" >
      </Redirect>
    )
  }
};

export default Home;
