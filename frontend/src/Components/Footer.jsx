import React from 'react';
import { Link } from 'react-router-dom';
import {
  BsTelephoneFill,
  BsEnvelopeFill,
  BsGeoAltFill,
  BsFacebook,
  BsTwitterX,
  BsInstagram,
  BsLinkedin,
} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo + Description */}
        <div>
          <Link to="/" className="text-2xl font-extrabold text-white">
            Lease<span className="text-[#7a62fe]">lodge</span>
          </Link>
          <p className="mt-4 text-sm text-gray-400">
            Your trusted platform to find, lease, and love your next home. We make the process simple, transparent, and enjoyable.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/properties" className="hover:text-white">Properties</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start">
              <BsTelephoneFill className="text-[#7a62fe] mr-3 mt-1" />
              +1 (123) 456-7890
            </li>
            <li className="flex items-start">
              <BsEnvelopeFill className="text-[#7a62fe] mr-3 mt-1" />
              support@leaselodge.com
            </li>
            <li className="flex items-start">
              <BsGeoAltFill className="text-[#7a62fe] mr-3 mt-1" />
              123 Real Estate Avenue, Suite 100, New York, NY
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
          <div className="flex space-x-5 text-2xl text-gray-400">
            <a href="#" className="hover:text-blue-500 transition"><BsFacebook /></a>
            <a href="#" className="hover:text-sky-400 transition"><BsTwitterX /></a>
            <a href="#" className="hover:text-pink-500 transition"><BsInstagram /></a>
            <a href="#" className="hover:text-blue-700 transition"><BsLinkedin /></a>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Leaselodge. All rights reserved. Built with 💜 by the Leaselodge Team.
      </div>
    </footer>
  );
};

export default Footer;
