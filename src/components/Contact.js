import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState({
    success: false,
    error: false,
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setFormStatus({ success: false, error: false, message: "" });

    const form = e.target;
    const formData = new FormData(form);
    const templateParams = {
      from_name: formData.get("user_name"),
      from_email: formData.get("user_email"),
      phone: formData.get("phone") || "Not provided",
      message: formData.get("message"),
      to_name: "Harshit",
    };

    emailjs
      .send(
        "service_el7aac4",
        "template_ygvlqrm",
        templateParams,
        "DO9l_PdQsidrEtOsB"
      )
      .then(
        (response) => {
          setFormStatus({
            success: true,
            error: false,
            message: "Message sent successfully!",
          });
          form.reset();
        },
        (error) => {
          setFormStatus({
            success: false,
            error: true,
            message: "Failed to send message. Please try again later.",
          });
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-100 via-pink-100 to-red-100 px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 border-t-4 border-orange-400">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-2">
          Contact Us
        </h1>
        <p className="text-gray-500 text-center mb-6">
          We'd love to hear from you
        </p>

        {formStatus.success && (
          <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 text-green-700 rounded-r-md">
            {formStatus.message}
          </div>
        )}

        {formStatus.error && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-r-md">
            {formStatus.message}
          </div>
        )}

        <form id="contactForm" onSubmit={sendEmail} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="user_name"
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Email
            </label>
            <input
              type="email"
              name="user_email"
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone (Optional)
            </label>
            <input
              type="text"
              name="phone"
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
              rows="4"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-orange-400 hover:bg-orange-500 text-white font-medium rounded-lg shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400 disabled:bg-orange-300"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
