import ProjectDetails from '@/components/ProjectDetails';
import { getProject } from '@/sanity/schemas/sanity-utils';

export default async function({ params }) {
  const slug = params.project
  const currentProject = await getProject(slug)
  console.log(currentProject);

  return (
    <>
      <ProjectDetails project={currentProject} />
    </>
  )
}