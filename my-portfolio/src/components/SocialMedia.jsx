import React from 'react';
import {BsInstagram, BsGithub } from 'react-icons/bs';
import { FaFacebookF, FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://github.com/MohitMourya01">
      <div>
        <BsGithub />
      </div>
    </a>
    <a href="https://www.linkedin.com/in/mohit1004/">
      <div>
        <FaLinkedin />
      </div>
    </a>
    <a href="#">
      <div>
        <BsInstagram/>
      </div>
    </a>
  </div>
);

export default SocialMedia;