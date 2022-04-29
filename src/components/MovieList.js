import React, { Component } from 'react'

import { movies } from '../movieData'

import axios from 'axios'

export class MovieList extends Component {
  constructor() {
    console.log('construtor first')
    super();

    this.state = {
      hover: "",
      parr: [1],
      movies : []
    };
  }

  async componentDidMount(){
         const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=499d932620eacdab75bb523c0cee2fec&language=en-US&page=1`)
         let movieData = res.data
         console.log(movieData)

         this.setState({
           movies : [...movieData.results]
         })

         console.log('mounting done with CDM third')
  }

  render() {
    

    return (
      <>
        <div>
          <h3 className='text-center'><strong>Trending</strong></h3>
        </div>

        <div className="movies-list">
          {
            this.state.movies.map((movieElem)=>(
              <div className="card movie-card" onMouseEnter={()=> this.setState({hover:movieElem.id})} onMouseLeave={()=> this.setState({hover: ''})}>
                <img src={`https://image.tmdb.org/t/p/original${movieElem.backdrop_path}`} style={{height: '40vh', width: '20vw'}} className="card-img-top movie-img" alt="..."/>
                
                <h5 className="card-title movie-title">{movieElem.title}</h5>   

                <div className="button-wrapper" style={{display : 'flex', justifyContent: 'center'}}>

                  {
                    this.state.hover == movieElem.id && (<a href="#" className="btn btn-primary movies-button text-center">Add to Favourites</a>) 
                  }
                              
                </div>

                          
              </div>
            ))
          }
        </div>

        <div style={{display:'flex', justifyContent:'center'}}>
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item"><a class="page-link" href="#">Previous</a></li>
              {
                this.state.parr.map((value)=>(
                  <li class="page-item"><a class="page-link" href="#">{value}</a></li>
                ))
              }
              
              <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
          </nav>
        </div>
      </>
    )
  }
}

export default MovieList