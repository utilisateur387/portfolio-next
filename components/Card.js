import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

const Card = ({ project }) => {
  const coverUrl = `images/${project.title
    .toLowerCase()
    .replaceAll(' ', '_')
    .replaceAll('.', '')
  }/cover_image.jpg`;

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
          {project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}
        </div>
      </div>

      { !project.coming_soon && <Link href={`/${project.id}`}>
        <div
          className="img-container"
          style={{ opacity: inView ? 1 : 0, transition: 'opacity 1s', transitionDelay: '50ms'}}>
          <img src={coverUrl} alt="" />
        </div>
      </Link> }

      { project.coming_soon &&
        <div
          className="img-container"
          style={{ opacity: inView ? 1 : 0, transition: 'opacity 1s', transitionDelay: '50ms'}}>
          <img src={coverUrl} alt="" />
        </div>
       }
    </div>
  )
}

export default Card;
