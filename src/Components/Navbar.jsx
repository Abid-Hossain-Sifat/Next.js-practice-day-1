'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathName = usePathname();

  return (
    <div className='shadow-sm'>
      <div className='max-w-[80%] mx-auto flex justify-between items-center p-5'>
        <div>
          <h1 className='text-[28px] font-extrabold text-blue-600'>AHS</h1>
        </div>
        <nav className='flex gap-3 items-center flex-wrap'>
          <Link className={`px-3 py-2 rounded transition ${pathName === '/' ? 'btn btn-accent btn-sm' : 'hover:bg-gray-100'}`} href="/">
            Home
          </Link>
          <Link className={`px-3 py-2 rounded transition ${pathName === '/about' ? 'btn btn-accent btn-sm' : 'hover:bg-gray-100'}`} href="/about">
            About
          </Link>
          <Link className={`px-3 py-2 rounded transition ${pathName === '/blog' ? 'btn btn-accent btn-sm' : 'hover:bg-gray-100'}`} href="/blog">
            Blogs
          </Link>
          <Link className={`px-3 py-2 rounded transition ${pathName === '/contact' ? 'btn btn-accent btn-sm' : 'hover:bg-gray-100'}`} href="/contact">
            Contact
          </Link>
          <Link className={`px-3 py-2 rounded transition ${pathName === '/users' ? 'btn btn-accent btn-sm' : 'hover:bg-gray-100'}`} href="/users">
            Users
          </Link>
          <Link className={`px-3 py-2 rounded transition ${pathName === '/dashboard' ? 'btn btn-accent btn-sm' : 'hover:bg-gray-100'}`} href="/dashboard">
            Dashboard
          </Link>
          <Link className={`px-3 py-2 rounded transition ${pathName === '/img' ? 'btn btn-accent btn-sm' : 'hover:bg-gray-100'}`} href="/img">
            Image
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
