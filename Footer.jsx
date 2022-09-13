import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-primary" >
      <div className="text-center p-3 copy-right text-white" >
        © 2022 Copyright :{" "}
        <Link className="text-white" to="/">BookStore</Link>
      </div>
    </footer>
  )
}

export default Footer