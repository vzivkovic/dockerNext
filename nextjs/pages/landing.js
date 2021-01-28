import React from 'react'
import Link from 'next/link'

function Landing() {
  return (
    <>
      <Link href="/about">
        <a>About</a>
      </Link>
      <h1>Landing</h1>
    </>
  )
}

export default Landing
