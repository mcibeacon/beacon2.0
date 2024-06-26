// Landing.js

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { textVariant } from "../utils/motion";
import articles from "../constants/Articles";
import ReactMarkdown from 'react-markdown';
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import { Card } from "flowbite-react";
import GoogleCalendarEmbed from "./GoogleCalendarEmbed";
import featured from '../constants/featured';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Rocks } from './Rocks';
import Footer from './Footer';


const Landing = () => {
  function slugify(title) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-'); // Remove consecutive hyphens
  }

  const mostRecentArticle = articles[0];

  return (
    <>
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        staggerContainer
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} article-card-container   `}
      ><div className='stuff'>
        <motion.div variants={textVariant()}>
          
          <Link to={`/articles/${mostRecentArticle.date}-${slugify(mostRecentArticle.title)}`} className="link">
            {mostRecentArticle && (
              <div className="article-container max-xs:ml-[360px] shadow-card  max-xs:w-[330px]">
                <div>
                  <h3 className="article-title max-xs:text-[13px] ">{mostRecentArticle.title}</h3>
                  <h5 className="article-author max-xs:text-[11px]">{mostRecentArticle.author}</h5>
                  <h5 className="article-date">{mostRecentArticle.date}</h5>
                  <div className="article-content">
                    <h5 className="article-date max-xs:hidden">{mostRecentArticle.preview}</h5>
                  </div>
                </div>
                <div>
                  <img src={mostRecentArticle.image} alt="image" className="article-image max-xs:block" />
                </div>
              </div>
            )}
          </Link>
          <div className="mini-container max-xs:mr-[125px] ">
            {/* Mini Articles */}
            {[1, 2, 3].map((index) => (
              <motion.div key={index} variants={textVariant()} className=''>
                <Link to={`/articles/${articles[index].date}-${slugify(articles[index].title)}`} className="link">
                  {articles[index] && (
                    <div className="mini-article-container  md:w-[400px]
                   max-xs:ml-[0px] max-xs:opacity-[90%] max-xs:mr-[10px] max-xs:p-3 max-xs:block max-xs:-[30px] shadow-card max-xs:w-[120px] ">
                      <div className='cropped-image '>
                        <img src={articles[index].image} alt="image" className="mini-article-image max-xs:block" />
                      </div>
                      <h3 className="article-title  max-xs:mt-3 max-xs:text-[10px]" id="mini">
                        {articles[index].title.length > 39
                          ? articles[index].title.slice(0, 36) + "..."
                          : articles[index].title}
                      </h3>
                      <h5 className="article-author max-xs:text-[9px]" id="mini">{articles[index].author}</h5>
                      <h5 className="article-date max-xs:text-[9px]  " id="mini">{articles[index].date}</h5>
                      <div className="article-content" id="mini"></div>
                    </div>
                  )}
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="mini-container md:hidden max-xs:mr-[125px] ">
            {/* Mini Articles */}
            {[4, 5, 6].map((index) => (
              <motion.div key={index} variants={textVariant()} className=''>
                <Link to={`/articles/${articles[index].date}-${slugify(articles[index].title)}`} className="link">
                  {articles[index] && (
                    <div className="mini-article-container  md:w-[400px]
                   max-xs:ml-[0px] max-xs:opacity-[90%] max-xs:mr-[10px] max-xs:p-3 max-xs:block max-xs:-[30px] shadow-card max-xs:w-[120px] ">
                      <div className='cropped-image '>
                        <img src={articles[index].image} alt="image" className="mini-article-image max-xs:block" />
                      </div>
                      <h3 className="article-title  max-xs:mt-3 max-xs:text-[10px]" id="mini">
                        {articles[index].title.length > 39
                          ? articles[index].title.slice(0, 36) + "..."
                          : articles[index].title}
                      </h3>
                      <h5 className="article-author max-xs:text-[9px]" id="mini">{articles[index].author}</h5>
                      <h5 className="article-date max-xs:text-[9px]  " id="mini">{articles[index].date}</h5>
                      <div className="article-content" id="mini"></div>
                    </div>
                  )}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
        

        <div className="mini-containertwo max-xs:hidden">
          {/* Mini Articles */}
          {[4, 5, 6].map((index) => (
            <motion.div key={index} variants={textVariant()}>
              <Link to={`/articles/${articles[index].date}-${slugify(articles[index].title)}`} className="link">
                {articles[index] && (
                  <div className="mini-article-container shadow-card max-xs:w-[100px] ">
                    <div className='cropped-image max-xs:hidden'>
                      <img src={articles[index].image} alt="image" className="mini-article-image " />
                    </div>
                    <h3 className="article-title max-xs:ml-0 max-xs:text-[10px]" id="mini">
                      {articles[index].title.length > 39
                        ? articles[index].title.slice(0, 36) + "..."
                        : articles[index].title}
                    </h3>
                    <h5 className="article-author" id="mini">{articles[index].author}</h5>
                    <h5 className="article-date" id="mini">{articles[index].date}</h5>
                    <div className="article-content" id="mini"></div>
                  </div>
                )}
              </Link>
              
            </motion.div>
          ))}
        </div>
        

        {/* More Stories Section */}
        <motion.div className=' max-xs:hidden mr-12'>
          <Card className="more-stories max-xs:w-1/2 ">
            <div className="mb-4 flex items-center justify-between max-xs:w-1/2">
              <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">More stories</h5>
              <Link to="./articles" className='allstories rounded-2xl' id="all-link ">View all</Link>
            </div>
            <div className="flow-root divide-y w-[1200px] ml-[0px]">
              <ul className="divide-y divide-gray-700 dark:divide-gray-700">
                <li>
                  <div></div>
                </li>
                <div className="line" />
                {articles.slice(7, 18).map((article, index) => (
                  <Link key={index} to={`/articles/${article.date}-${slugify(article.title)}`} className="link">
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="shrink-0">
                          <h5 className="truncate text-sm font-normal text-gray-900 dark:text-white">
                            {article.author} |
                          </h5>
                        </div>
                        <div className="min-w-0 flex-1 max-xs:w-2">
                          <h3 className=" font-medium text-tertiary max-xs:text-[10px]" id="mini">
                            {article.title}
                          </h3>
                        </div>
                        <h5 className="truncate text-sm text-gray-500 dark:text-gray-400">
                          {article.date}
                        </h5>
                        <div className="inline-flex items-center text-base w-[50px] text-gray-900 dark:text-white">
                          🔗
                        </div>
                      </div>
                    </li>
                    <div className="line" />
                  </Link>
                ))}
              </ul>
            </div>
            <div className='w-full '>
     
      </div>
          </Card>
          
        </motion.div>
        
        </div>

              <h5 className="text-xl  p-3 leading-none text-gray-900 dark:text-white xs:hidden mb-2">More stories</h5>
              <Link to="./articles" className='allstories rounded-2xl xs:hidden' id="all-link ">View all</Link>
            
      </motion.section>
      <Footer/>
   
    </>
  );
}

export default Landing;
