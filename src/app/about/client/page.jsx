import React from 'react'
import Link from 'next/link'

const ClientPage = () => {
  return (
    <div className='max-w-[80%] mx-auto p-50 flex flex-col justify-center items-center space-y-5'>
      <h1>
        About Client
      </h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem doloribus nobis asperiores enim dolore, maxime autem officiis eos nam nostrum?
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

export default ClientPage
