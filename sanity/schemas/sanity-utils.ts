import { createClient, groq } from "next-sanity";

export async function getProjects() {
  const client = createClient({
    projectId: '9qina2zm',
    dataset: 'production',
    apiVersion: '2023-12-09',
  })

  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "image": image.asset->url,
      content
    }`
  )
}

