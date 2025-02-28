import React from "react";

const ContactPage: React.FC = () => {
  return (
    <main className="relative grow">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {` We'd love to hear from you! Whether you have a question about our
            blog, feedback, or just want to say hello.`}
          </p>
        </div>

        <div className="bg-white dark:bg-zinc-800 shadow-xl rounded-2xl p-8 backdrop-blur-sm bg-opacity-90">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-2xl font-semibold mb-6 border-b pb-2 dark:border-gray-700">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-600 dark:text-blue-300"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      contact@miniblog.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-600 dark:text-green-300"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      +1 (123) 456-7890
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-purple-600 dark:text-purple-300"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Address</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      123 Blog Street,
                      <br />
                      Blog City, BC 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map or Additional Content */}
            <div className="relative h-full rounded-lg overflow-hidden bg-gray-100 dark:bg-zinc-700">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
              <div className="relative h-full flex items-center justify-center p-6 text-center">
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Operating Hours
                  </h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-400">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
