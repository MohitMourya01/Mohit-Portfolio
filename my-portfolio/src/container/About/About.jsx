import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
 import { urlFor, client } from '../../client';
import StarsCanvas from '../../canvas/stars';

// const abouts = [
//    { title: 'Tech Enthusiast',description: 'Love to learn new technologies and like to explore the field of Machine Learning, AI and Web3.', imgUrl: 'https://cdn.sanity.io/images/uoqg8kde/production/56a75599af3f694c20c414a2c89c71c4016065e2-225x225.jpg'
//    },
//    {title: 'Full Stack Developer', description: 'FullStack Developer, well versed with React JS, Python, Django, SQL, RESTful APIs, etc..',imgUrl: 'https://cdn.sanity.io/images/uoqg8kde/production/97cad006c5fd9ea1b70fe7a078aa4b0736d68518-2560x1453.jpg'},
//    {title: 'Problem Solver', description: 'I have solved over 500+ DSA/Problem Solving problems and got a global ranking of 2551 in 22000+ participants.', imgUrl: 'https://i.pinimg.com/736x/9d/ab/3d/9dab3de132fa26f0bd62ffca6539f8de.jpg'}
// ];

const About = () => {
   const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Opporunities</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="b-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__primarybg',
);
