import FilterButton from './FilterButton';
import { motion } from 'framer-motion';
import InfoButton from './InfoButton';

const NavButtons = ({ tags, toggleFilters, toggleAbout, tagCount }) => {
  return (
    <motion.div
      id="filters"
      className="nav-buttons"
      >
      <FilterButton
        tags={tags}
        toggleFilters={toggleFilters}
        tagCount={tagCount} />
      <InfoButton
        toggleAbout={toggleAbout}
      />
    </motion.div>
  )
}

export default NavButtons;

