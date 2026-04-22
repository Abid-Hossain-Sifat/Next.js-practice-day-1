import Link from "next/link";

const UserId = async ({params}) => {
  const { usersid } = await params;
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  const user = data.find(u => u.id === parseInt(usersid))

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card bg-base-100 shadow-xl max-w-md">
        <div className="card-body">
          <h2 className="card-title">{user.name}</h2>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
          <p><strong>Company:</strong> {user.company.name}</p>
          <div className="flex justify-center">
            <button className="btn btn-soft btn-error">
              <Link href="/users">
              Go to Users
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserId
