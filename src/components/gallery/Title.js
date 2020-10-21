import React from 'react'
import galleryStyles from './gallery.module.scss'

const Title = () => {
  return (
    <div className={galleryStyles.title}>
      <h2>My Gallery</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  )
}

export default Title;