import './index.css'
import { AuthContext } from '../../store'
import { useContext } from 'react'
import { Redirect } from 'react-router'
import { API_BASE_URL } from '../../api/index'

const Home = () => {
  const { store, dispatch } = useContext(AuthContext)!
  if (!store.islogined) {
    return (
      <>
        <div className="container bootdey">
          <div className="col-md-12">
            <section className="panel">
              <div className="panel-body">
                <img
                  className="img-responsive"
                  src={`${API_BASE_URL}/static/images/store.jpg`}
                  alt=""
                />
              </div>
            </section>
          </div>
        </div>
      </>
    )
  } else {
    return <Redirect to="/product"></Redirect>
  }
}

export default Home
