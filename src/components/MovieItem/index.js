// Write your code here
import {Popup} from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'
import 'reactjs-popup/dist/index.css'
import './index.css'

const MovieItem = props => {
  const {each} = props

  return (
    <div>
      <Popup
        modal
        trigger={
          <img
            src={each.thumbnailUrl}
            alt="thumbnail"
            style={{cursor: 'pointer'}}
          />
        }
        className="pop-con"
      >
        {close => (
          <div className="popup-player">
            <button
              onClick={() => close()}
              type="button"
              className="close-btn"
              data-testid="closeButton"
            >
              <IoMdClose size={15} />
            </button>
            <ReactPlayer url={each.videoUrl} width="90%" height="100%" />
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
