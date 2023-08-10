import React from 'react';
import { BsCalendar, BsFacebook, BsInstagram, BsMailbox, BsPhone, BsPinMap, BsTwitter } from 'react-icons/bs'

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 rounded-3xl shadow-lg h-[90vh] lg:w-1/4 text-white p-4">
      <div className="flex flex-col items-center space-x-2 mb-4">
        <h2 className="text-2xl text-white text-opacity-50">
          DP
        </h2>
        <div className="flex flex-col">
          <h1 className="text-xl font-bold">Davies Precious</h1>
          <p className="text-gray-400 text-center">Web Developer</p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-4 pt-4">
        <ul className="space-y-4">
          <li className="flex items-start">
            <div className="w-6 h-6 mr-2">
              <BsMailbox />
            </div>
            <div>
              <p className="text-sm font-medium">Email</p>
              <a href="mailto:richard@example.com" className="text-gray-400">richard@example.com</a>
            </div>
          </li>
          <li className="flex items-start">
            <div className="w-6 h-6 mr-2">
              <BsPhone />
            </div>
            <div>
              <p className="text-sm font-medium">Phone</p>
              <a href="tel:+2348157265060" className="text-gray-400">+ (234) 815-726-5060</a>
            </div>
          </li>
          <li className="flex items-start">
            <div className="w-6 h-6 mr-2">
              <BsFacebook />
            </div>
            <div>
              <p className="text-sm font-medium">Facebook</p>
              <a href="" className="text-gray-400">Send Message</a>
            </div>
          </li>
          <li className="flex items-start">
            <div className="w-6 h-6 mr-2">
              <BsInstagram />
            </div>
            <div>
              <p className="text-sm font-medium">Instagram</p>
              <a href="" className="text-gray-400">Follow Me</a>
            </div>
          </li>
          <li className="flex items-start">
            <div className="w-6 h-6 mr-2">
              <BsTwitter />
            </div>
            <div>
              <p className="text-sm font-medium">Twitter</p>
              <a href="" className="text-gray-400">Tweet</a>
            </div>
          </li>
          <li className="flex items-start">
            <div className="w-6 h-6 mr-2">
              <BsPinMap/>
            </div>
            <div>
              <p className="text-sm font-medium">Location</p>
              <address className="text-gray-400">Sacramento, California, USA</address>
            </div>
          </li>
        </ul>
        <div className="border-t border-gray-700 mt-4 pt-4">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-gray-400">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
