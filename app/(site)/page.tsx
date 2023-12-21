import Home from '@/components/Home'
import { getProjects } from '@/sanity/schemas/sanity-utils'

export default async function() {
  const projects = await getProjects();
  
  return (
    <Home projects={projects} />
  )
}
