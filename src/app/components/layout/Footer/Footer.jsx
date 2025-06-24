import React from 'react';
import { FaYoutube, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10 px-6">
      <div className="container max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-10">
        {/* Column One */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Column One</h3>
          <ul className="space-y-2">
            <li>Twenty One</li>
            <li>Thirty Two</li>
            <li>Fourty Three</li>
            <li>Fifty Four</li>
          </ul>
        </div>

        {/* Column Two */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Column Two</h3>
          <ul className="space-y-2">
            <li>Sixty Five</li>
            <li>Seventy Six</li>
            <li>Eighty Seven</li>
            <li>Ninety Eight</li>
          </ul>
        </div>

        {/* Column Three */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Column Three</h3>
          <ul className="space-y-2">
            <li>One Two</li>
            <li>Three Four</li>
            <li>Five Six</li>
            <li>Seven Eight</li>
          </ul>
        </div>

        {/* Column Four */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Column Four</h3>
          <div className="flex gap-3 mb-4 grid grid-cols-2 ">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-10"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-10"
            />
          </div>
          <h3 className="font-semibold text-lg mb-2">Join Us</h3>
          <div className="flex space-x-4 text-xl">
            <FaYoutube />
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
