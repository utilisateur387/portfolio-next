import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Project } from "@/types/types";

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      title,
      categories[],
      "slug": slug.current,
      "coverImage": coverImage.asset->url,
      "thumbnail": thumbnail.asset->url,
      orderRank,
    } | order(orderRank)`
  )
}

export async function getProjectSlugs(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
      "slug": slug.current,
    }`
  )
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      description,
      type,
      year,
      categories[],
      "slug": slug.current,
      "coverImage": coverImage.asset->url,
      "thumbnail": thumbnail.asset->url,
      "gallery": gallery[]{
        "url": asset->url,
        alt
      },
      team[],
      tools[],
      music,
      githubUrl,
      liveUrl,
      youtube,
      vimeo,
      localVideo,
    }`,
    { slug: slug }
  )
}

