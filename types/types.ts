import { PortableTextBlock } from "sanity"

export type Project = {
  _id: string,
  title: string,
  slug: string,
  type: string,
  year: string,
  tools: string[],
  team: string[],
  music: string,
  githubUrl: string,
  liveUrl: string,
  categories: Array<string>,
  coverImage: string,
  vimeo: string,
  youtube: string,
  localVideo: string,
  gallery: Array<string>
  description: PortableTextBlock[],
}