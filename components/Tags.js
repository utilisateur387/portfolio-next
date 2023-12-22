import Image from 'next/image';
import useAnchor from './useAnchor';

const Tags = ({ tags, tagsDisplay, toggleFilters }) => {
  const anchor = useAnchor();
  
  const handleClick = () => {
    anchor.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFilter = (e) => {
    const button = e.currentTarget;
    toggleFilters(button.value);
    const cross = button.querySelector('.cross');
    cross.classList.toggle('cross-active');
    button.classList.toggle('tag-active');
  }

  return (
    <div
      id="filters"
      className='tag-list'
      style={{ display: tagsDisplay }}
      onClick={handleClick} >

      {tags.map(tag =>
        <button
          className="tags-clickable"
          value={tag}
          key={tag}
          onClick={handleFilter}>
          {tag }
          <span className="cross" >
            <Image 
              className="img-cross" 
              src="/images/general/cross_blue.png" 
              alt="cross icon"
              width={0}
              height={0}
              sizes='10vw'
            />
          </span>
        </button>)}
    </div>
  )
}

export default Tags;
