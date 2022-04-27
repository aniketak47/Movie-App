import React, { Component } from 'react'

import { movies } from '../movieData'

export class MovieList extends Component {
  render() {
    let moviesArr = movies.results

    return (
      <>
        <div>
          <h3 className='text-center'><strong>Trending</strong></h3>
        </div>

        <div className="movies-list">
          {
            moviesArr.map((movieElem)=>(
              <div className="card movie-card">
                <img src="http://exclaim.ca/images/avatar_3.jpg" style={{height: '40vh', width: '20vw'}} className="card-img-top movie-img" alt="..."/>
                
                  <h5 className="card-title banner-title">{movieElem.title}</h5>                  
                          
              </div>
            ))
          }
        </div>
      </>
    )
  }
}

export default MovieList