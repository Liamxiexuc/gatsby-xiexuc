import React from 'react'
import { Link } from 'gatsby'
import Fire from '../assets/fire.mp4'
import landingStyles from './index.module.scss'


const IndexPage = () => {
  return (
		<div>
      <section className={landingStyles.showcase}>
        <div className={landingStyles.videoContainer}>
          <video src={Fire} autoPlay muted loop></video>
        </div>
        <div className={landingStyles.content}>
          <h1>Light On Your Camping Fire</h1>
          <h3>I'm Xiexu Chen, a full-stack developer living in Hobart.</h3>
          <Link to='/home' className={landingStyles.btn} >
            <div className={landingStyles.textWrap}>
              <div className={landingStyles.btnText} data-text='READ MORE'>
                READ MORE
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default IndexPage;
