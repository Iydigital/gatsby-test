import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{color:'red'}}>
      <Header headerText="Contact" />
      <p>You made it.</p>
      <Link to="/">Home</Link>
    </div>
  )
}
