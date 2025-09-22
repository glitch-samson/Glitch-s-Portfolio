import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1200);
  };

  const createRipple = (event) => {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.classList.add('ripple');
    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) ripple.remove();
    button.appendChild(circle);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: Phone, label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
    { icon: MapPin, label: 'Location', value: personal.location, href: '#' }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In <span className="bg-gradient-to-r from-accent-700 to-accent-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="flex items-center group">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-700 to-accent-500 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mr-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">{info.label}</p>
                    <a href={info.href} className="text-gray-900 dark:text-white hover:text-accent-700 dark:hover:text-accent-400 transition-colors duration-200 font-semibold">
                      {info.value}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Name *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Email *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400" placeholder="your@email.com" />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Subject *</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400" placeholder="Project inquiry, collaboration, etc." />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Message *</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="6" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none" placeholder="Tell me about your project or just say hello..."></textarea>
              </div>

              {/* Submit Button with ripple */}
              <button type="submit" disabled={isSubmitting} onClick={createRipple} className="ripple-container w-full px-8 py-4 bg-accent-700 hover:bg-accent-800 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2">
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {submitStatus && (
                <div className={`flex items-center justify-center space-x-2 p-4 rounded-lg ${
                  submitStatus === 'success' 
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' 
                    : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
                }`}>
                  {submitStatus === 'success' ? (
                    <>
                      <CheckCircle className="h-5 w-5" />
                      <span>Message sent successfully! I'll get back to you soon.</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="h-5 w-5" />
                      <span>Something went wrong. Please try again.</span>
                    </>
                  )}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
