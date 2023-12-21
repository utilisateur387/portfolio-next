"use client"

import About from '@/components/About'
import Headline from '@/components/Headline'
import NavButtons from '@/components/NavButtons'
import Projects from '@/components/Projects'
import { CATEGORIES } from '@/contants'
import { Project } from '@/types/types'
import Image from 'next/image'
import { useState } from 'react'

type HomeProps = {
  projects: Project[]
}

export default function Home({ projects } : HomeProps) {
  const [showAbout, setShowAbout] = useState(false);
  const [activeFilters, setActiveFilters] = useState([]); // Filter projects with tags
  const [tagCount, setTagCount] = useState(0); // Track number of active tags
  
  const tags: string[] = CATEGORIES;  

  function toggleFilters(tag: string) {
    if (activeFilters.includes(tag)) {
      setActiveFilters(prev => {
        return prev.filter(current => current.toUpperCase() !== tag.toUpperCase())
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
        tags={tags}
        toggleFilters={toggleFilters}
        toggleAbout={toggleAbout}
        tagCount={tagCount} />

      <About toggleAbout={toggleAbout} showAbout={showAbout} />
      <Projects
        projects={projects}
        activeFilters={activeFilters}
        tagCount={tagCount}/>
    </main>
  )
}
