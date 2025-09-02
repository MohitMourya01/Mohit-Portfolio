import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { images } from "../../constants";

// import * as ReactTooltip from 'react-tooltip';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';
const skill = [
  {name:"React",
    bgColor: "#fef4f5",
    icon: images.react,
  },
  {name:"HTML",
    bgColor: "#fef4f5",
    icon: images.html,
  },
  {name:"CSS",
    bgColor: "#fef4f5",
    icon: images.css,
  },
  {name:"Tailwind",
    bgColor: "#fef4f5",
    icon: images.tailwind,
  },
  {name:"SCSS",
    bgColor: "#fef4f5",
    icon: images.sass,
  },
  {name:"JavaScript",
    bgColor: "#fef4f5",
    icon: images.javascript,
  },
  {name:"C/C++",
    bgColor: "#fef4f5",
    icon: images.cpp,
  },
  {name:"Git/Github",
    bgColor: "#fef4f5",
    icon: images.git,
  },
  {name:"NodeJS",
    bgColor: "#fef4f5",
    icon: images.node,
  },
  {
    name: "Python", 
    bgColor: "#fef4f5",
    icon: images.python
  },
  {
    name: "AI/ML", 
    bgColor: "#fef4f5",
    icon: images.ml
  }
  
  
]
const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  // const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      // setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills <span>& </span>Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skill.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.10, type: 'tween' }}
              className="app__skills-item app__flex"
              key={skill.name+ index}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {/* {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="b-text">Download Resume</h4>
                      
                    </motion.div>
                    <motion.div
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </motion.div>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))} */}
          <h2 className='b-text2'>Download Reasume Here -</h2>
          <div class="blink"><span className='xblink'><a href="https://gold-alfie-60.tiiny.site" target='_blank'><img src={images.download} alt="" height ="80px" width= '80px' /></a></span></div>
          
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__primarybg',
);