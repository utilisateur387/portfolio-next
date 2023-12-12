import { PortableTextBlock } from "sanity"

export type Project = {
  _id: string,
  title: string,
  slug: string,
  type: string,
  year: string,
  categories: Array<string>,
  coverImage: string,
  description: PortableTextBlock[],
}