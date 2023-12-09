'use client'

import About from '@/components/About'
import Headline from '@/components/Headline'
import NavButtons from '@/components/NavButtons'
import Projects from '@/components/Projects'
import data from '@/data/projects_data.json'
import Image from 'next/image'
import { useState } from 'react'


export default function Home() {
  const [refPoint, setRefPoint] = useState(false); // Hide nav buttons on landing
  const [showAbout, setShowAbout] = useState(false);
  const [activeFilters, setActiveFilters] = useState([]); // Filter projects with tags
  const [tagCount, setTagCount] = useState(0); // Track number of active tags
  
  const tags: string[] = ['UX', 'design', 'Coding', '3D', 'Motion', 'Identity', 'Print'];

  function toggleFilters(tag: string) {
    if (activeFilters.includes(tag)) {
      setActiveFilters(prev => {
        return prev.filter(current => current !== tag)
      })
      setTagCount(activeFilters.length - 1)

    } else {
      setTagCount(activeFilters.length + 1)
      return setActiveFilters(prev => [...prev, tag])
    }
  }

  const toggleAbout:() => void = () => {
    if (showAbout === false) {
      setShowAbout(true);
      const body = document.querySelector('body');
      if (body) {
        body.style.overflowY = 'hidden';
      }
    } else {
      setShowAbout(false);
      const body = document.querySelector('body');
      if (body) {
        body.style.overflowY = 'auto';
      }
    }
  }

  return (
    <main 
      className="body"
      style={{ overflowY: 'hidden' }}>
      <Headline/>
      <NavButtons
        active={refPoint}
        tags={tags}
        toggleFilters={toggleFilters}
        toggleAbout={toggleAbout}
        tagCount={tagCount} />

      <About toggleAbout={toggleAbout} showAbout={showAbout} />
      <Projects
        activeFilters={activeFilters}
        tagCount={tagCount}/>
    </main>
  )
}
