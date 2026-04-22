import React from 'react'
import Link from 'next/link'
import Data from '../../../public/Data1.json'
const BlogPage = () => {
  return (
    <div className='bg-gray-200'>
      <div className='max-w-[80%] mx-auto p-5'>
        <div className='text-4xl font-bold text-center'>
            <h1>
                Here is Blog Site
            </h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
            {Data.map((blog) => (
                <div key={blog.id} className='bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-shadow duration-300'>
                  <p className='text-sm text-indigo-600 font-semibold'>{blog.category}</p>
                  <h2 className='text-xl font-bold mt-2'>{blog.title}</h2>
                  <p className='text-sm text-gray-500 mt-1'>
                    By {blog.author} • {blog.date}
                  </p>
                  <p className='text-gray-700 mt-3'>{blog.summary}</p>
                  <div className='flex flex-wrap gap-2 mt-4'>
                    {blog.tags.map((tag, index) => (
                      <p
                        key={index}
                        className='text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full'
                      >
                        {tag}
                      </p>
                    ))}
                  </div>
                  <p className='text-sm font-medium text-gray-600 mt-4'>Read Time: {blog.readTime}</p>
                  <button className='btn btn-soft btn-accent mt-2'>
                    <Link href={`/blog/${blog.id}`}>See More</Link>
                  </button>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default BlogPage
