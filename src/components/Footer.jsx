import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Brand Info */}
              <div className="space-y-4">
                  <h3 className="text-xl font-bold text-orange-500">GearSphere</h3>
                  <p className="text-sm text-gray-300">
                      Your ultimate destination for premium sports equipment. Explore, shop, and elevate your game.
                  </p>
              </div>
  
              {/* Quick Links */}
              <div>
                  <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
                  <ul className="space-y-2">
                      <li><Link to="/about" className="text-gray-300 hover:text-orange-500 transition duration-300">About Us</Link></li>
                      <li><Link to="/contact" className="text-gray-300 hover:text-orange-500 transition duration-300">Contact</Link></li>
                      <li><Link to="/jobs" className="text-gray-300 hover:text-orange-500 transition duration-300">Careers</Link></li>
                      <li><Link to="/press" className="text-gray-300 hover:text-orange-500 transition duration-300">Press Kit</Link></li>
                  </ul>
              </div>
  
              {/* Legal */}
              <div>
                  <h4 className="text-lg font-semibold mb-4 text-white">Legal</h4>
                  <ul className="space-y-2">
                      <li><Link to="/privacy" className="text-gray-300 hover:text-orange-500 transition duration-300">Privacy Policy</Link></li>
                      <li><Link to="/terms" className="text-gray-300 hover:text-orange-500 transition duration-300">Terms of Service</Link></li>
                      <li><Link to="/refunds" className="text-gray-300 hover:text-orange-500 transition duration-300">Refund Policy</Link></li>
                  </ul>
              </div>
  
              {/* Social Media */}
              <div>
                  <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
                  <div className="flex space-x-4">
                      <Link to="#" className="text-gray-300 hover:text-orange-500 transition duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                          </svg>
                      </Link>
                      {/* Add other social media icons here */}
                  </div>
              </div>
          </div>
  
          {/* Copyright */}
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>© {new Date().getFullYear()} GearSphere. All rights reserved.</p>
          </div>
      </div>
  </footer>
    );
};

export default Footer;