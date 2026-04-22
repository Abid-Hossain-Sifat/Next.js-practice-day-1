import React from 'react'
import Link from 'next/link'
const ContactPage = () => {
  return (
    <div className='bg-amber-700'>
      <div className='max-w-[80%] mx-auto p-50 items-center flex justify-center'>
        <div>
          <h1>
            Click here to contact Developer or Admin
          </h1>
          <div className='my-5 flex justify-between'>
            <button className='btn btn-soft btn-primary'>
              <Link href="/contact/developers">
                Developer
              </Link>
            </button>
            <button className='btn btn-soft btn-error'>
              <Link href="/contact/admin">
                Admin
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
