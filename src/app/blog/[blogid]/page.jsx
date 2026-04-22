import React from 'react'
import Data from '../../../../public/Data1.json'
import Link from 'next/link';

const BlogDetailsPage = async ({params}) => {
  const { blogid } = await params;
  const blog = Data.find(Data => Data.id === parseInt (blogid));
  console.log (blog)
  return (
    <div>
      <div>
        {blog && <div>
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
                    <Link href="/">See More</Link>
                  </button>
                </div>
        </div>
        }
      </div>
    </div>
  )
}

export default BlogDetailsPage
