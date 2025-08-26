"use client"
import Head from 'next/head';
import { useState } from 'react'; 

export default function Contact() {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleWhatsAppClick = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

   
    if (!name || !email || !message) {
      alert('Please fill in Name, Email, and Message fields.');
      return;
    }

    const whatsappMessage = `
Hello, I'd like to contact you regarding a tender inquiry.

Name: ${name}
Email: ${email}
Subject: ${subject || 'No Subject Provided'}
Message:
${message}

Thank you!
`.trim(); 

  
    const encodedMessage = encodeURIComponent(whatsappMessage);

   
    const whatsappNumber = '919876543210'; 

   
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

   
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <Head>
        <title>Contact Us - Your Company</title>
        <meta name="description" content="Get in touch with us for any inquiries." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-white shadow-2xl rounded-xl p-8 sm:p-10 lg:p-12 w-full max-w-5xl flex flex-col md:flex-row gap-10">
    
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6 relative pb-4">
              Get in Touch
              <span style={{ backgroundColor: '#00B0C0' }} className="absolute bottom-0 left-0 w-24 h-1 rounded-full"></span>
            </h1>
            <p className="text-gray-600 mb-8 text-lg sm:text-xl leading-relaxed">
              We're here to help! Whether you have a question about tenders, need support, or just want to give feedback, feel free to contact us.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <svg className="w-7 h-7 flex-shrink-0 mr-4" style={{ color: '#00B0C0' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.805l.004.005.006.006a1 1 0 01.071.127l.103.205c.071.139.147.276.23.409l.044.072.012.019a1 1 0 00.354.354l.019.012.072.044c.133.083.27.159.409.23l.205.103c.045.023.09.045.135.065.074.032.15.059.227.081.077.022.155.039.233.053.078.014.156.024.234.029.078.005.157.005.235 0a1 1 0 00.707-1.707A6 6 0 0014.243 5.757zM10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                </svg>
                <p className="text-gray-700 text-base">
                  317 Unique Solution ,<br/>
                  Soni chal Rakhial Road<br/>
                  Ahmedabad, Gujarat 380009,<br/>
                  India
                </p>
              </div>
              <div className="flex items-center">
                <svg className="w-7 h-7 flex-shrink-0 mr-4" style={{ color: '#00B0C0' }} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <p className="text-gray-700 text-base">uniquesolution317@gmail.com</p>
              </div>
              <div className="flex items-center">
                <svg className="w-7 h-7 flex-shrink-0 mr-4" style={{ color: '#00B0C0' }} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <p className="text-gray-700 text-base">+91 88 66 00 2529</p>
              </div>
            </div>
          </div>

    
          <div className="flex justify-start space-x-5 mt-8">
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-transform duration-300 transform hover:scale-110">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/512px-2021_Facebook_icon.svg.png" alt="Facebook" className="w-8 h-8" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-transform duration-300 transform hover:scale-110">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/512px-X_logo_2023.svg.png" alt="Twitter" className="w-8 h-8" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-transform duration-300 transform hover:scale-110">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/512px-Instagram_logo_2016.svg.png" alt="Instagram" className="w-8 h-8" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-transform duration-300 transform hover:scale-110">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/512px-LinkedIn_icon.svg.png" alt="LinkedIn" className="w-8 h-8" />
            </a>
          </div>
        </div>

       
        <div className="md:w-1/2">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name} 
                onChange={handleChange} 
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#00B0C0] focus:border-[#00B0C0] sm:text-base transition duration-200"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email} 
                onChange={handleChange} 
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#00B0C0] focus:border-[#00B0C0] sm:text-base transition duration-200"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject} 
                onChange={handleChange} 
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#00B0C0] focus:border-[#00B0C0] sm:text-base transition duration-200"
                placeholder="Regarding a tender inquiry..."
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange} 
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#00B0C0] focus:border-[#00B0C0] sm:text-base transition duration-200"
                placeholder="Type your message here..."
                required
              ></textarea>
            </div>
            <div>
              <button
                type="button" 
                onClick={handleWhatsAppClick} 
                style={{ backgroundColor: '#00B0C0' }}
                className="w-full flex justify-center py-3 px-4 rounded-lg shadow-lg text-lg font-bold text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00B0C0] transition duration-300 ease-in-out transform hover:-translate-y-1"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.04 2C7.03 2 3 6.03 3 11.04c0 1.95.53 3.89 1.58 5.61L3.15 21.04l4.56-1.46c1.61.88 3.44 1.34 5.33 1.34 5.01 0 9.04-4.03 9.04-9.04S17.05 2 12.04 2zM17 15.68c-.14.28-.52.37-.8.2-.14-.07-.38-.17-.79-.35-.41-.18-1.04-.44-1.2-.5-.16-.06-.35-.14-.54-.04-.19.09-.43.27-.61.47-.18.2-.38.22-.61.1-.23-.1-.97-.37-1.85-1.14-.68-.6-1.14-1.27-1.27-1.48-.13-.21-.01-.32.09-.42.08-.08.18-.17.27-.25.09-.09.13-.19.19-.32.06-.13.03-.24-.01-.34-.04-.1-.35-.84-.48-1.13-.14-.3-.28-.26-.38-.26h-.22c-.14 0-.36.06-.55.24-.19.18-.73.72-.73 1.76 0 1.04.75 2.03.85 2.18.1.15 1.4 2.13 3.42 2.97 2.02.84 2.53.72 2.99.68.46-.04.99-.4 1.14-.73.15-.33.15-.6.1-.73-.04-.13-.15-.22-.32-.3z"/>
                </svg>
                Send Message on WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}