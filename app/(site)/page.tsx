import Home from '@/components/Home'
import { getProjects } from '@/sanity/schemas/sanity-utils'

export default async function Landing() {
  const projects = await getProjects();
  
  return (
    <Home projects={projects} />
  )
}
