import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className="pt-[5%]">
      <footer className="bg-gray-800 text-white py-10 ">
        <div className="container mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1 */}
            <div>
            <h3 className="text-3xl font-semibold mb-4">ZMT Edtech</h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                convallis euismod dui id lacinia.
              </p>
            </div>
            {/* Column 2 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Links</h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="about">About</a>
                </li>
                <li>
                  <a href="contact">Contact</a>
                </li>
              </ul>
            </div>
            {/* Column 3 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p>123 Main Street, City, Country</p>
              <p>Email: info@example.com</p>
              <p>Phone: +123 456 7890</p>
            </div>
            {/* Column 4 */}
            <div>
      <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
      <div className="flex space-x-4">
        <a href="https://www.facebook.com/" className="text-xl hover:text-blue-500 text-white">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://twitter.com/" className="text-xl hover:text-blue-500 text-white">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://twitter.com/" className="text-xl hover:text-blue-500 text-white">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
