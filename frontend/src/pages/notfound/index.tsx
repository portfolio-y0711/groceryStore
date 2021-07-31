import './index.css'
import { useHistory } from 'react-router'

const PageNotFound = () => {
  const history = useHistory()

  setTimeout(() => {
    history.push('/')
  }, 5000)

  return (
    <>
      <div id="app" className="notFound">
        <div>403</div>
        <div className="txt">
          Forbidden<span className="blink">_</span>
          <br />
          Redirect in 5 seconds
        </div>
      </div>
    </>
  )
}
export default PageNotFound
