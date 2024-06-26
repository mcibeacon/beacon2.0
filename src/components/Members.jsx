import React from 'react';
import instagram from '../assets/instagram.svg';
import './Members.css'; // Import the CSS file
import { motion } from 'framer-motion';
import { staggerContainer, textVariant } from '../utils/motion';
import { styles } from '../styles';
import { fadeIn } from '../utils/motion';
import { editorsInChief, managingEditor, copyEditors, layoutHead, comicsIllustrationsHead, photographyHead, webTeamHead, secretary, publicityHead, columnist } from '../constants/Event';

const categories = [
  { title: 'Editors in Chief', members: editorsInChief },
  { title: 'Managing Editor', members: managingEditor },
  { title: 'Copy Editors', members: copyEditors },
  { title: 'Layout Head', members: layoutHead },
  { title: 'Illustrations Head', members: comicsIllustrationsHead },
  { title: 'Photography Head', members: photographyHead },
  { title: 'Web Team Head', members: webTeamHead },
  { title: 'Secretary', members: secretary },
  { title: 'Publicity Head', members: publicityHead },
  { title: 'Columnist', members: columnist },
];

const Members = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      staggerContainer
      viewport={{ once: true, amount: 0.25 }}
      className="md:px-[100px] max-xs:px-[10px] "
    >
      <div className="members-grid ">
        {categories.map((category, index) => (
          <motion.div key={index} variants={textVariant()} className="category-container ">
            <h1 className={`members-container ${styles.heroSubText} uppercase`}>{category.title}</h1>
            <div className="member-list">
              {category.members.map((member, memberIndex) => (
                <div className="member-card" key={memberIndex}>
                  <div className="bg-slate-100 md:py-4 md:px-6 placeholder:text-gray-500 focus:outline-none text-gray-900 rounded-lg outlined-none border-none font-medium">
                    <div className="mt-0 flex flex-col gap-8">
                      <li className="member-item">
                        <div className="member-info">
                          <motion.div variants={textVariant()} className="max-xs:hidden">
                            <img src={member.pfp} alt={member.name} className="member-image" />
                          </motion.div>
                          <div className="flex-col">
                            <h3 className=" max-xs:text-[10px]  ">{member.name}</h3>
                          </div>
                        </div>
                        <a href={member.iglink} className="w-5 align-center mr-4 max-xs:hidden">
                          <img src={instagram} alt="ig" />
                        </a>
                      </li>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Members;
 