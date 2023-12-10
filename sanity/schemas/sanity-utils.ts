import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Project } from "@/types/types";

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      title,
      type,
      year,
      categories[],
      "slug": slug.current,
      "coverImage": coverImage.asset->url,
    }`
  )
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      type,
      year,
      categories[],
      "slug": slug.current,
      "coverImage": coverImage.asset->url,
    }`,
    { slug: slug }
  )
}

