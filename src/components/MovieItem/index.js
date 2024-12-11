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
        trigger={
          <img
            src={each.thumbnailUrl}
            alt="thumbnail"
            style={{cursor: 'pointer'}}
          />
        }
        modal
        className="pop-con"
        style={{borderRadius: '100px'}}
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
