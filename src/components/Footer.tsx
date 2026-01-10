'use client';

import { Send, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-50 pt-24 pb-12 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 mb-20">
          {/* Contact Info */}
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold text-primary mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              米国市場でのテスト販売について、<br/>
              お気軽にご相談ください。
            </p>
          </div>

          {/* Form */}
          <div className="md:w-2/3 bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">First Name <span className="text-red-500">*</span></label>
                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                </div>
                <div>
                     <label className="block text-sm font-bold text-gray-700 mb-2">Last Name <span className="text-red-500">*</span></label>
                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                </div>
              </div>
              
              <div>
                   <label className="block text-sm font-bold text-gray-700 mb-2">Email <span className="text-red-500">*</span></label>
                   <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
              </div>

               <div>
                   <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                   <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
              </div>

               <div>
                   <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                   <textarea rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
              </div>

              <button type="button" className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center space-x-2 shadow-md">
                <span>Submit</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p className="text-gray-400">Copyright © {new Date().getFullYear()} <span className="font-['Avenir']">09STATES</span> - All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
          </div>
        </div>
      </div>
    </footer>
  );
}
