import React from 'react';
import './footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';

export const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>EGATOR</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>

        <div className="footer__socials">
          <a href="htpps://facebook.com"><FaFacebookF /></a>
          <a href="htpps://instagram.com"><FiInstagram /></a>
          <a href="htpps://twitter.com"><IoLogoTwitter /></a>
        </div>
      </ul>

      <div className="footer__copyright">
        <small>&copy; EGATOR Tutorials. All rights reserved</small>
      </div>
    </footer>
  );
}
