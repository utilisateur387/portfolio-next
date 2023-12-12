import Card from './Card';
import data from "../data/projects_data.json";
import { useInView } from 'react-intersection-observer';

const Projects = ({ projects, activeFilters, tagCount }) => {

  const [ref, inView] = useInView({
    threshold: 0,
  })
  // console.log(inView);
  // if (inView) showNavButtons();

  return (
    <>
      <div ref={ref}></div>
      <div id="projects" className='project-list'>

        {/* { tagCount > 0 &&

          data
            .filter(project => {
              return project.tags.some(tag => activeFilters.includes(tag))
            })
            .map(project => {
              return <Card project={project} key={project.id} />
            })
        }

        { tagCount === 0 &&

            data
              .map(project => {
            return <Card project={project} key={project.id} />
          })
        } */}

        {
          projects.map(project => {
            return <Card project={project} key={project._id} />
          })
        }

      </div>
    </>
  )
}

export default Projects;
