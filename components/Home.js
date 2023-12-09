import Projects from './Projects';
import NavButtons from './NavButtons';
import Headline from './Headline';
import About from './About';
import { useState } from 'react';
import data from "../data/projects_data.json";

const allTags = []; // Import tags from data file
data.forEach(project => allTags.push(project.tags));
const tags = [...new Set(allTags.flat())];

const Home = () => {

  const [refPoint, setRefPoint] = useState(false); // Hide nav buttons on landing
  const [showAbout, setShowAbout] = useState(false);

  // const showNavButtons = () => {
  //   setRefPoint(true);
  //   console.log(refPoint);
  // };

  const [activeFilters, setActiveFilters] = useState([]); // Filter projects with tags
  const [tagCount, setTagCount] = useState(0); // Track number of active tags

  const toggleFilters = (tag) => {
    if (activeFilters.includes(tag)) {
      setActiveFilters(prev => {
        return prev.filter(current => current !== tag)
      })
      setTagCount(activeFilters.length - 1);

    } else {
      setTagCount(activeFilters.length + 1);
      return setActiveFilters(prev => [...prev, tag]);
    }
  }

  const toggleAbout = () => {
    if (showAbout === false) {
      setShowAbout(true);
      const body = document.querySelector('body');
      body.style.overflowY = 'hidden';
    } else {
      setShowAbout(false);
      const body = document.querySelector('body');
      body.style.overflowY = 'auto';
    }
    // setShowAbout(showAbout === true ? false : true);
  }

  return (
    <div
      className="body"
      style={{ overflowY: 'hidden' }}>
    {/*<div style={{ overflowY: showAbout ? 'hidden' : 'auto' }}>*/}
      <Headline/>
      <NavButtons
        active={refPoint}
        tags={tags}
        toggleFilters={toggleFilters}
        toggleAbout={toggleAbout}
        tagCount={tagCount} />

      {/*{ showAbout && <About toggleAbout={toggleAbout} />}*/}
      <About toggleAbout={toggleAbout} showAbout={showAbout} />
      <Projects
        activeFilters={activeFilters}
        tagCount={tagCount}/>
    </div>
  )
}

export default Home;
