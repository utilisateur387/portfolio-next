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
  console.log("activeFilters");
  console.log(activeFilters);
  console.log("filteredProjects");
  console.log(filteredProjects);
  console.log("projects");
  console.log(projects);
  console.log("activeFilters");
  console.log(activeFilters);

  return (
    <>
      <div ref={ref}></div>
      <div id="projects" className='project-list'>

        { tagCount > 0 &&

            
            projects
              .filter(project => {
                console.log("project.categories");
                console.log(project.categories);
                return project.categories.some(tag => activeFilters.includes(tag))
              })
              .map(project => {
                return <Card project={project} key={project._id} />
              })
          // data
          //   .filter(project => {
          //     return project.tags.some(tag => activeFilters.includes(tag))
          //   })
          //   .map(project => {
          //     return <Card project={project} key={project.id} />
          //   })
        }

        { tagCount === 0 &&

          //   data
          //     .map(project => {
          //   return <Card project={project} key={project.id} />
          // })

          
            projects.map(project => {
              return <Card project={project} key={project._id} />
            })
          
        }

        {/* {
          projects.map(project => {
            return <Card project={project} key={project._id} />
          })
        } */}

      </div>
    </>
  )
}

export default Projects;
