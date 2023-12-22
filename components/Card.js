import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

const Card = ({ project }) => {
  const coverUrl = project.coverImage;
  const coverAlt = project.title;

  const [ref, inView] = useInView({
    threshold: 0,
  })

  return (
    <div className="card" ref={ref}>
      <div
        className="card-top-infos"
        style={{ opacity: inView ? 1 : 0, transition: 'opacity 0.4s' }}
        >
        <p className="uppercase">
          {project.title}
          { project.coming_soon && <span style={{ textTransform: "lowercase"}}> – <i>coming soon!</i></span> }
        </p>
        <div className="tags-container">
          {project.categories.map(tag => <span className="tag" key={tag}>{tag}</span>)}
        </div>
      </div>

      { !project.coming_soon && <Link href={`/${project.slug}`}>
        <div
          className="img-container"
          style={{ opacity: inView ? 1 : 0, transition: 'opacity 1s', transitionDelay: '50ms'}}>
          <Image 
            src={coverUrl} 
            alt={coverAlt} 
            width={0}
            height={0}
            style={{ width: '100%', height: 'auto' }} 
            sizes='(max-width: 768px) 100vw, 50vw'
          />
        </div>
      </Link> }

      { project.coming_soon &&
        <div
          className="img-container"
          style={{ opacity: inView ? 1 : 0, transition: 'opacity 1s', transitionDelay: '50ms'}}>
          <Image 
            src={coverUrl} 
            alt={coverAlt} 
            width={0}
            height={0}
            style={{ width: '100%', height: 'auto' }} 
            sizes='(max-width: 768px) 100vw, 50vw'
          />
        </div>
       }
    </div>
  )
}

export default Card;
