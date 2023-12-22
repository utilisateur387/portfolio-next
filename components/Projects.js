import Card from './Card';
import { useInView } from 'react-intersection-observer';

const Projects = ({ projects, activeFilters, tagCount }) => {

  const [ref, inView] = useInView({
    threshold: 0,
  })
  // if (inView) showNavButtons();

  const filteredProjects = projects.filter(project => {
    return project.categories.some(tag => activeFilters.includes(tag))
  })

  return (
    <>
      <div ref={ref}></div>
      <div id="projects" className='project-list'>

        { tagCount > 0 &&
            projects
              .filter(project => {
                return project.categories.some(tag => activeFilters.includes(tag))
              })
              .map(project => {
                return <Card project={project} key={project._id} />
              })
        }

        { tagCount === 0 &&          
            projects.map(project => {
              return <Card project={project} key={project._id} />
            })  
        }
      </div>
    </>
  )
}

export default Projects;
