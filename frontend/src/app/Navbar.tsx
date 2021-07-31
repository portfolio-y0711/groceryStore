import { AuthContext } from '../store'
import { useContext } from 'react'
import { auth } from '../api'

const NavBar = () => {
  const { store, dispatch } = useContext(AuthContext)!
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
            {!localStorage.getItem('token') ? (
              <li>
                <a
                  href="/"
                  onClick={async (e) => {
                    const response = await (await auth.login()).data
                    if ('token' in response) {
                      dispatch({ type: 'login' })
                      localStorage.setItem('token', response.token.value)
                      window.location.href = '/product'
                    }
                  }}
                >
                  인증받기
                </a>
              </li>
            ) : (
              <li>
                <a
                  href="/"
                  onClick={async (e) => {
                    const response = await (await auth.logout()).data
                    e.preventDefault()
                    if ('token' in response) {
                      localStorage.removeItem('token')
                      dispatch({ type: 'logout' })
                    }
                  }}
                >
                  인증해제
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar
