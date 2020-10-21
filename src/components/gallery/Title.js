import React from 'react'
import galleryStyles from './gallery.module.scss'

const Title = () => {
  return (
    <div className={galleryStyles.title}>
      <h2>My Gallery</h2>
      <p>I collect something what I like.</p>
    </div>
  )
}

export default Title;