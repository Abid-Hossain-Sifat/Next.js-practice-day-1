import React from 'react'
import Link from 'next/link';
const UserPage = async () => {
    const res = await fetch ('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
  return (
    <>
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Users
      </h1>
    </div>
    <div className="max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
        {users.map((user) => (
          <div key={user.id} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-center flex items-center justify-center text-xl">{user.name}</h2>
              <div className="card-actions justify-center">
                <button className="btn btn-soft btn-accent">
                    <Link href={`/users/${user.id}`}>
                    More Details
                    </Link>
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
    </>
  )
}

export default UserPage
