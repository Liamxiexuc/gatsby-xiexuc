import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
		<Layout>
      <h1>Hello,</h1>
			<h2>I'm Xiexu Chen, a full-stack developer living in Hobart.</h2>
			<p>Need a developer?</p> <Link to='/contact'>Contact me</Link>
    </Layout>
  )
}

export default IndexPage;
