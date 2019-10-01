import React from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../../../config';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import MovieThumb from '../MovieThumb/MovieThumb.component';
import './MovieInfo.styles.css';

const MovieInfo = ({ movie, directors }) => (
  <div className="rmdb-movieinfo"
    style={{
      background: movie.backdrop_path ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}')` : '#000'
    }}
  >
    <div className="rmdb-movieinfo-content">
      <div className="rmdb-movieinfo-thumb">
        <MovieThumb
          image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : './images/no_image.jpg'}
          clickable={false}
        />
      </div>
      <div className="rmdb-movieinfo-text">
        <h1>{movie.title}</h1>
        <h3>PLOT</h3>
        <p>{movie.overview}</p>
        <h3>IMDB RATING</h3>
        <div className="rmdb-rating">
          <meter min="0" max="100" optimum="100" low="40" high="70" value={ movie.vote_average * 10}></meter>
          <p className="rmdb-score">{movie.vote_average}</p>
        </div>
        {directors.length > 1 ? <h3>DIRECTORS</h3> : <h3>DIRECTOR</h3>}
        {directors.map( (element, i) => {
          return <p key={i} className="rmdb-director">{element.name}</p>
        })}
      </div>
      <FontAwesome className="fa-film" name="film" size="5x" />
    </div>
  </div>
)

MovieInfo.propTypes = {
  movie: PropTypes.object,
  directors: PropTypes.array
}

export default MovieInfo;