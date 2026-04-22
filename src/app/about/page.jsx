import Link from "next/link"

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">About Us</h1>
        <p className="text-lg text-gray-700 text-center mb-12">Explore our team and company information</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card bg-white shadow-lg">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">Developers</h2>
              <p className="text-gray-600 mb-6">Meet our talented development team</p>
              <div className="card-actions">
                <button className="btn btn-success">
                  <Link href="/about/developers">View Team</Link>
                </button>
              </div>
            </div>
          </div>
          
          <div className="card bg-white shadow-lg">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">Clients</h2>
              <p className="text-gray-600 mb-6">Learn about our valued clients</p>
              <div className="card-actions">
                <button className="btn btn-error">
                  <Link href="/about/client">View Clients</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
