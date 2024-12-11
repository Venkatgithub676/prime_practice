// Write your code here

import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(each => each.categoryId === 'ACTION')
  const comedyMovies = moviesList.filter(each => each.categoryId === 'COMEDY')

  return (
    <div className="main-bg-con">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video"
      />
      <div className="slider-main-con">
        <h1 className="headings">Action Movies</h1>
        <div className="slider-con">
          <MoviesSlider movies={actionMovies} />
        </div>
        <h1 className="headings">Comedy Movies</h1>
        <div className="slider-con">
          <MoviesSlider movies={comedyMovies} />
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
