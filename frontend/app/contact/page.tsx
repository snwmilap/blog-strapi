import React from "react";

const ContactPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-zinc-900">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Contact Us
          </h1>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            {`          Have a question or want to collaborate? We'd love to hear from you.
`}{" "}
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Email Card */}
          <div className="group p-6 bg-white dark:bg-zinc-800 rounded-xl hover:shadow-lg transition-all duration-300">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-xl mb-1">Email</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  contact@miniblog.com
                </p>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div className="group p-6 bg-white dark:bg-zinc-800 rounded-xl hover:shadow-lg transition-all duration-300">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-xl mb-1">Phone</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  +1 (123) 456-7890
                </p>
              </div>
            </div>
          </div>

          {/* Location Card */}
          <div className="group p-6 bg-white dark:bg-zinc-800 rounded-xl hover:shadow-lg transition-all duration-300 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-50 dark:bg-purple-900/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-xl mb-1">Location</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  123 Blog Street,
                  <br />
                  Blog City, BC 12345
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hours Section */}
        <div className="bg-white dark:bg-zinc-800 rounded-xl p-8 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Operating Hours</h2>
          <div className="space-y-2 text-gray-600 dark:text-gray-400">
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
