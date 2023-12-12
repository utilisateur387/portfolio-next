import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";
import { visionTool } from "@sanity/vision";
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

const config = defineConfig({
  projectId: '9qina2zm',
  dataset: 'production',
  title: 'Portfolio Miebi',
  apiVersion: '2023-12-09',
  basePath: '/admin',
  plugins: [
    visionTool(),
    deskTool({
      structure: (S, context) =>
        S.list()
          .title("Content")
          .items([
            // Minimum required configuration
            orderableDocumentListDeskItem(
              { type: 'project', S, context, title: 'Projects' },
            ),
          ]),
    }), 
],
  schema: { types: schemas }
})

export default config;