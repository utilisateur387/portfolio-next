import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";
import { visionTool } from "@sanity/vision";

const config = defineConfig({
  projectId: '9qina2zm',
  dataset: 'production',
  title: 'Portfolio Miebi',
  apiVersion: '2023-12-09',
  basePath: '/admin',
  plugins: [deskTool(), visionTool()],
  schema: { types: schemas }
})

export default config;