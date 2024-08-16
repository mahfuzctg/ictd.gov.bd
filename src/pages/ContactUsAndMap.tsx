import React from "react";

// Placeholder for Google Maps iframe
const GoogleMap = () => {
  return (
    <div className="w-full h-64 md:h-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094!2d144.95373531550437!3d-37.81720997975179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727e70b5dbd0d5!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1613968585846!5m2!1sen!2sau"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        title="Google Map"
      ></iframe>
    </div>
  );
};

// Contact Us form placeholder
const ContactUs = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-lg font-bold uppercase text-center text-gray-700 mb-4">
        Contact Us
      </h3>
      <form className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Write your message here..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

const ContactUsAndMap: React.FC = () => {
  return (
    <section className="container mx-auto py-10 px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Google Map Card */}
        <div className="w-full">
          <GoogleMap />
        </div>

        {/* Contact Us Card */}
        <div className="w-full">
          <ContactUs />
        </div>
      </div>
    </section>
  );
};

export default ContactUsAndMap;
