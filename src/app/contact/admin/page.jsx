import React from 'react'
import Link from 'next/link'

const AdminPage = () => {
  return (
    <div className='bg-amber-700'>
      <div className='max-w-[80%] mx-auto p-50 items-center flex justify-center'>
        <div>
          <h1>
            Click here to contact Admin
          </h1>
          <div className='my-5 flex justify-between'>
            <button className='btn btn-soft btn-primary'>
              <Link href="">
                Contact
              </Link>
            </button>
            <button className='btn btn-soft btn-error'>
              <Link href="/">
                Home
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminPage
