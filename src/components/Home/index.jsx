import React from 'react'
import Gallery from '../Gallery';
import Buttons from '../Buttons';

export default () => {
  return (
    <div>
      {/* <NavBar/> */}
      <h1 className="homePageTitle">Welcome to My Portfolio</h1>
      <Gallery/>
      <Buttons/>
      <h1 className="title">Innovating with Technology</h1>
    </div>
  )
}
