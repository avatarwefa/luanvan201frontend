import React from 'react'
import Link from 'next/link'
interface Props {
}
const movies = [
  {
    movieImg: 'images/uploads/slider1.jpg',
    movieUrl: '#',
    hashtag: [
      {
        hashtagName: 'Sci-fi',
        hashtagColor: 'blue',
        hashtagUrl: '#'
      }
    ],
    movieName: 'Interstellar',
    rating: '7.4'
  }, {
    movieImg: 'images/uploads/slider2.jpg',
    movieUrl: '#',
    hashtag: [
      {
        hashtagName: 'action',
        hashtagColor: 'yell',
        hashtagUrl: '#'
      }
    ],
    movieName: 'The revenant',
    rating: '7.4'
  }, {
    movieImg: 'images/uploads/slider3.jpg',
    movieUrl: '#',
    hashtag: [
      {
        hashtagName: 'comedy',
        hashtagColor: 'green',
        hashtagUrl: '#'
      }
    ],
    movieName: 'Die hard',
    rating: '7.4'
  }, {
    movieImg: 'images/uploads/slider4.jpg',
    movieUrl: '#',
    hashtag: [
      {
        hashtagName: 'Sci-fi',
        hashtagColor: 'blue',
        hashtagUrl: '#'
      },
      {
        hashtagName: 'advanture',
        hashtagColor: 'orange',
        hashtagUrl: '#'
      }
    ],
    movieName: 'The walk',
    rating: '7.4'
  },
  {
    movieImg: 'images/uploads/slider2.jpg',
    movieUrl: '#',
    hashtag: [
      {
        hashtagName: 'Sci-fi',
        hashtagColor: 'blue',
        hashtagUrl: '#'
      }
    ],
    movieName: 'The revenant',
    rating: '7.4'
  }, {
    movieImg: 'images/uploads/slider3.jpg',
    movieUrl: '#',
    hashtag: [
      {
        hashtagName: 'action',
        hashtagColor: 'yell',
        hashtagUrl: '#'
      }
    ],
    movieName: 'Die hard',
    rating: '7.4'
  }, {
    movieImg: 'images/uploads/slider4.jpg',
    movieUrl: '#',
    hashtag: [
      {
        hashtagName: 'comedy',
        hashtagColor: 'green',
        hashtagUrl: '#'
      }
    ],
    movieName: 'The walk',
    rating: '7,4'
  }
]
const TopFilmHeader: React.FunctionComponent<Props> = () => {
  return (
    <div className="slider movie-items">
      <div className="container">
        <div className="row">
          <div className="social-link">
            <p>Follow us: </p>
            <a href="#"><i className="ion-social-facebook"></i></a>
            <a href="#"><i className="ion-social-twitter"></i></a>
            <a href="#"><i className="ion-social-googleplus"></i></a>
            <a href="#"><i className="ion-social-youtube"></i></a>
          </div>
          <div className="slick-multiItemSlider">
            {movies.map((movie, index) => (
              <div className="movie-item" key={index}>
                <div className="mv-img">
                  <Link href={movie.movieUrl}>
                    <a><img src={movie.movieImg} alt="" width="285" height="437" /></a>
                  </Link>
                </div>
                <div className="title-in">
                  <div className="cate">
                    {movie.hashtag.map((hashtag, hashtagindex) => (
                      <span className={hashtag.hashtagColor}>
                        <Link href={hashtag.hashtagUrl}>
                          <a href="#" key={hashtagindex}>{hashtag.hashtagName}</a>
                        </Link>
                      </span>
                    ))}
                  </div>
                  <h6>
                    <Link href={movie.movieUrl}>
                      <a>{movie.movieName}</a>
                    </Link>
                  </h6>
                  <p><i className="ion-android-star"></i><span>{movie.rating}</span> /10</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default TopFilmHeader