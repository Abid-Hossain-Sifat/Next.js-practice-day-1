import React from 'react'
import Link from 'next/link'
const DevelopersPage = () => {
  return (
    <div className='max-w-[80%] mx-auto p-50 flex flex-col justify-center items-center space-y-5'>
      <h1>
        About developer
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ullam.
      </p>
      <div>
        <button className='btn btn-soft btn-accent'>
          <Link href="/about">
            About
          </Link>
        </button>
      </div>
    </div>
  )
}

export default DevelopersPage
