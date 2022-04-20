import React, { Component } from 'react'

export class NavBar extends Component {
  render() {
    return (
      <div style={{display:'flex', padding:'0.5'}}>
          <h1>Movies App</h1>
          <h2 style={{marginLeft:'2rem', marginTop:'0.6rem'}}>Favourites</h2>
      </div>
    )
  }
}

export default NavBar