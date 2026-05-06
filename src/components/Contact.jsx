import { useState } from 'react';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init('orbUQVLfGPBnE86h9');

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Validate form
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setError('Please fill all fields');
      setLoading(false);
      return;
    }

    try {
      // Send email via EmailJS
      await emailjs.send(
        'service_aaztebe',
        'template_ltu098a',
        {
          to_email: 'mohdaayyan@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }
      );
      
      // Show success message
      setSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });

      // Clear success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error('Failed to send email:', err);
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-gray-100 text-slate-950 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-sky-600">

          </div>
          <h2 className="mt-4 text-5xl font-serif font-semibold tracking-tight">
            Contact Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* LEFT SIDE - CONTACT INFO */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Phone Number</h3>
              <p className="text-sky-600 font-medium">+91 7702010454</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a href="mailto:mohdaayyan@gmail.com" className="text-sky-600 hover:underline font-medium">
                mohdaayyan@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Social Network</h3>
              <div className="flex gap-4 text-2xl">
                <a href="#" className="hover:text-sky-600 transition">
                  <i className="fab fa-facebook" />
                </a>
                <a href="#" className="hover:text-sky-600 transition">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#" className="hover:text-sky-600 transition">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#" className="hover:text-sky-600 transition">
                  <i className="fab fa-dribbble" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {submitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                ✓ Message sent successfully!
              </div>
            )}
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                ✗ {error}
              </div>
            )}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded bg-white focus:outline-none focus:border-sky-600"
            />
            <input
              type="email"
              name="email"
              placeholder="Your E-mail"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded bg-white focus:outline-none focus:border-sky-600"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded bg-white focus:outline-none focus:border-sky-600"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded bg-white focus:outline-none focus:border-sky-600 resize-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-sky-700 text-white font-semibold py-3 rounded hover:bg-sky-800 transition uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}