import FilterButton from './FilterButton';
import { motion } from 'framer-motion';
import InfoButton from './InfoButton';

const NavButtons = ({ active, tags, toggleFilters, toggleAbout, tagCount }) => {
  console.log('[tags]');
  console.log(tags);

  return (
    <motion.div
      id="filters"
      className="nav-buttons"
      // style={{ opacity: active ? 1 : 0}}
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

