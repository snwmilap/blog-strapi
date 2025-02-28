import React from "react";

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-zinc-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
        <div className="bg-white dark:bg-zinc-800 shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-4">
            {`We'd love to hear from you! Whether you have a question about our
            blog, feedback, or just want to say hello, feel free to reach out to
            us.`}
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium">Email</h3>
              <p>contact@miniblog.com</p>
            </div>
            <div>
              <h3 className="text-xl font-medium">Phone</h3>
              <p>+1 (123) 456-7890</p>
            </div>
            <div>
              <h3 className="text-xl font-medium">Address</h3>
              <p>123 Blog Street, Blog City, BC 12345</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
