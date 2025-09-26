import React from 'react';
// import Container from './Container';

const footer = () => {
    return (
        <footer className="bg-black text-gray-300 px-8 py-12 ">
      
        <div className="grid md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-2">
              CS — Ticket System
            </h3>
            <p className="text-sm">
            CS — Ticket System is a modern platform to manage, track, and resolve customer support tickets efficiently.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Company</h4>
            <ul className="space-y-1 text-sm">
              <li>About Us</li>
              <li>Our Mission</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Services</h4>
            <ul className="space-y-1 text-sm">
              <li>Education & Services</li>
              <li>Student Stories</li>
              <li>Download Apps</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Information</h4>
            <ul className="space-y-1 text-sm">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Join Us</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Social Links</h4>
            <ul className="space-y-1 text-sm">
              <li>Our- <a className='underline' href="https://www.facebook.com/" target="_blank">Facebook</a> Page</li>
              <li>Our- <a className='underline' href="https://www.facebook.com/" target="_blank">Instagram</a> Page</li>
              <li>Our- <a className='underline' href="https://www.facebook.com/" target="_blank">Reddit</a> Page</li>
              <li>support@cst.com</li>
            </ul>
          </div>
        </div>
        <div className="text-left md:text-center text-gray-500 text-sm mt-8">
          © 2025 CS — Ticket System.
          <br className="block md:hidden" /> All rights reserved.
        </div>
      <hr />
    </footer>
    );
};

export default footer;