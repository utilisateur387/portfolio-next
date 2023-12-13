'use client'

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation'
import { PortableText } from '@portabletext/react';
import { Project } from '@/types/types';
import Image from 'next/image';

type ProjectProps = {
  project: Project
}

const ProjectDetails = ({ project } : ProjectProps) => {
  useEffect(() => {
    window.scrollTo(0, 0) // Scroll to top to prevent landing at the bottom
  }, []);

  const {
    title,
    year,
    team,
    tools,
    githubUrl,
    liveUrl,
    youtube,
    vimeo,
    description,
    type,
    music,
    categories,
    coverImage,
    gallery
  } = project

  const credits = team || tools || music

  const router = useRouter()
  const handleBack = () => {
    router.push('/#projects')
  }

  const images = null

  return (
      <>
        <p
          className="btn"
          onClick={handleBack}
          style={{ zIndex: 100 }}>
          <img src="images/general/arrow_left.png" alt="" className="arrow-back" />
          Back to index
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}>

          <div className="project-details">
            <p className="project-headline">
              <span className="uppercase">
                {title}
              </span>
              <span className="italic">
                , {type}, {year}
              </span>
            </p>

            <img src={coverImage} alt="Project cover" className='project-cover-img' />

            {/* MAIN CONTENT */}
            <div className="mb-8 mt-4">
              <div className="description block md:hidden w-full">
                <p className='content-title'>Project information</p>
                <PortableText value={description} />
              </div>

              <div className='grid grid-cols-2 md:flex w-full'>
                <div className="categories w-full md:w-3/12">
                  <p className='content-title'>Categories</p>
                  <div className="container-categories-tags">
                    {categories.map(tag => <span className="tag tag-details-page" key={tag}>{`${tag} `}</span>)}
                  </div>

                { (liveUrl || githubUrl) &&
                    <div className="project-links">
                      <p className='content-title'>Links</p>

                      { liveUrl &&
                        <span className="link nobreak">
                          <a href={liveUrl} target="_blank" rel="noreferrer">Online</a> <img src="images/general/arrow_slanted.png" className="arrow-slanted" alt="arrow" />
                        </span>
                      }

                      { githubUrl &&
                        <span className="link nobreak">
                          <a href={githubUrl} target="_blank" rel="noreferrer">Github</a> <img src="images/general/arrow_slanted.png" className="arrow-slanted" alt="arrow" />
                        </span>
                      }
                    </div>
                  }
                </div>

                <div className="description hidden md:block md:w-6/12 md:pr-12">
                  <p className='content-title'>Project information</p>
                  <PortableText value={description} />
                </div>

                { credits && 
                  <div className="credits w-full md:w-3/12 leading-[1.2em]">
                    <p className='content-title'>Credits</p>

                    { tools &&
                      <div>
                        Tools:<br/>
                        {tools.map(person => <span>{person}<br/></span>)}
                        <br/>
                      </div>
                    }

                    { team &&
                      <div>
                        Team:<br/>
                        {team.map(person => <span>{person}<br/></span>)}
                        <br/>
                      </div>
                    }

                    { music &&
                      <div>
                        Music:<br/>
                        {music}
                      </div>
                    }

                  </div>
                }
              </div>
            </div>

            {/* MOBILE LAYOUT */}
            {/* <div className="description mobile">
              <p className='content-title'>Project information</p>
              <PortableText value={description} />
            </div>

            <div className="project-infos mobile">
              <div className="categories">
                <p className='content-title'>Categories</p>
                <div className="container-categories-tags">
                  {categories.map(tag => <span className="tag tag-details-page" key={tag}>{`${tag} `}</span>)}
                </div>

               { (livesite || github) &&
                  <div className="project-links">
                    <p className='content-title'>Links</p>

                    { livesite &&
                      <span className="link nobreak">
                        <a href={livesite} target="_blank" rel="noreferrer">Livesite</a> <img src="images/general/arrow_slanted.png" className="arrow-slanted" alt="arrow" />
                      </span>
                    }

                    { github &&
                      <span className="link nobreak">
                        <a href={github} target="_blank" rel="noreferrer">Github</a> <img src="images/general/arrow_slanted.png" className="arrow-slanted" alt="arrow" />
                      </span>
                    }
                  </div>
                }
              </div>
            </div> */}

            {/* MAIN CONTENT */}
            { vimeo &&
              <div className="wrapper-video">
                <iframe src={`https://player.vimeo.com/video/${vimeo}?title=0&byline=0&portrait=0&transparent=0&autoplay=1`} width="640" height="480" frameborder="0" title={title} webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" data-ready="true"></iframe>
              </div>
            }

            { gallery && gallery.map(asset => {
              return (
                <Image
                  src={asset.url}
                  alt={asset.alt}
                  height={100}
                  width={100}
                  style={{ width: '100%', height: 'auto', borderRadius: 4, maxWidth: 1000 }} 
                  sizes='(max-width: 768px) 100vw'
                  className='mb-8 mx-auto'
                />
              )
            })}

            { youtube &&
              <div className="wrapper-video">
                <iframe 
                  width="640" 
                  height="480" 
                  src={`https://www.youtube.com/embed/${youtube}?controls=0`} 
                  title="YouTube video player" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen>
                </iframe>
              </div>
            }
            {/* { local_video &&
              <div className="project-video-container">
                <video width="auto" height="auto" autoplay="autoplay">
                  <source src={`${imgsFolder}/video01.mp4`} type="video/mp4"/>
                  Your browser does not support the video tag.
                </video>
              </div>
             } */}

          </div>
        </motion.div>
      </>
  )
}

export default ProjectDetails;
