import Tags from './Tags';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const FilterButton = ({ tags, toggleFilters, tagCount }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [tagsDisplay, setTagsDisplay] = useState('none');

  const handleClick = () => {
    setIsExpanded(isExpanded === true ? false : true);
  };

  useEffect(() => {
    setTagsDisplay('block')
  }, [])

  return (
    <>
      <motion.div
        className="filter-button"
        style={{ overflow: 'hidden' }}
        initial={{ width: 105 }}
        animate={{
          width: isExpanded ? '100vw' : 105,
          height: isExpanded ? 'auto' : 35,
        }}
        transition={{ duration: 0.3, stiffness: 30 }}
        >
        <span className="filter-title" onClick={handleClick}>Filters ({tagCount})</span>
        <div style={{ width: '90vw' }}>
          <Image
            src="/images/general/cross.png" 
            alt="cross icon"
            onClick={handleClick}
            className="img-cross-block"
            style={{ display: isExpanded ? 'block' : 'none' }}
            width={0}
            height={0}
            sizes='10vw'
            />
          <Tags tagsDisplay={tagsDisplay} tags={tags} toggleFilters={toggleFilters} />
        </div>
      </motion.div>

    </>
  )
};

export default FilterButton;
