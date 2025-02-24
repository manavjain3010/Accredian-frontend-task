// import React from 'react'

export default function Benefits() {
  return (
    <div id="benefits-section" className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-100">Available Courses & Rewards</h2>
        <div className="max-w-6xl mx-auto">
          <table className="w-full border-collapse bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
            <thead>
              <tr className="bg-black text-gray-100">
                <th className="px-6 py-4 text-xl font-semibold border-b border-gray-700">Course Name</th>
                <th className="px-6 py-4 text-xl font-semibold border-b border-gray-700">Duration</th>
                <th className="px-6 py-4 text-xl font-semibold border-b border-gray-700">Referral Bonus</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-700 transition-colors duration-200">
                <td className=" text-center px-6 py-4 text-lg text-gray-300 border-b border-gray-700">Full Stack Development</td>
                <td className=" text-center px-6 py-4 text-lg text-gray-300 border-b border-gray-700">6 Months</td>
                <td className=" text-center px-6 py-4 text-lg text-green-400 border-b border-gray-700">Rs.999</td>
              </tr>
              <tr className="hover:bg-gray-700 transition-colors duration-200">
                <td className=" text-center px-6 py-4 text-lg text-gray-300 border-b border-gray-700">Data Science</td>
                <td className=" text-center px-6 py-4 text-lg text-gray-300 border-b border-gray-700">4 Months</td>
                <td className=" text-center px-6 py-4 text-lg text-green-400 border-b border-gray-700">Rs.1499</td>
              </tr>
              <tr className="hover:bg-gray-700 transition-colors duration-200">
                <td className=" text-center px-6 py-4 text-lg text-gray-300 border-b border-gray-700">UI/UX Design</td>
                <td className=" text-center px-6 py-4 text-lg text-gray-300 border-b border-gray-700">3 Months</td>
                <td className=" text-center px-6 py-4 text-lg text-green-400 border-b border-gray-700">Rs.1999</td>
              </tr>
              <tr className="hover:bg-gray-700 transition-colors duration-200">
                <td className=" text-center px-6 py-4 text-lg text-gray-300">Cloud Computing</td>
                <td className=" text-center px-6 py-4 text-lg text-gray-300">5 Months</td>
                <td className=" text-center px-6 py-4 text-lg text-green-400">Rs.2499</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-12 text-center text-gray-400">
          <p className="text-lg">* Referral bonus will be credited after successful enrollment</p>
        </div>
      </div>
    </div>
  )
}
