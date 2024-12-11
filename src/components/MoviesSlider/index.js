// Write your code here
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {movies} = props

  const settings = {
    slidesToScroll: 2,
    slidesToShow: 4,
    dots: true,
  }

  console.log(movies)
  return (
    <Slider {...settings}>
      {movies.map(each => (
        <MovieItem each={each} key={each.id} />
      ))}
    </Slider>
  )
}

export default MoviesSlider
