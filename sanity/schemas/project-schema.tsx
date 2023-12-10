import Checkbox from '@/components/checkbox';
import CustomCategoriesInput from '@/components/CustomCategoriesInput';

const project = {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    }, {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title'
      }
    }, {
      name: 'test',
      title: 'Tetst',
      type: 'string',
      components: {
        input: CustomCategoriesInput,
      },
    }, {
      name: 'categories2',
      title: 'Categories2',
      type: 'array',
      components: {
        input: Checkbox,
      },
      of: [
        {
          type: 'string',
          options: {
            list: [
              { title: "Réemploi", value: "reemploi" },
              { title: "Vins tranquilles", value: "vins-tranquilles" },
              { title: "Effervescents", value: "effervescents" },
              { title: "Vendange", value: "vendange" },
              { title: "Matières sèches", value: "matieres-seches" },
            ],
          }
        }
      ]
    }, {
    //   name: 'categories',
    //   title: 'Categories',
    //   type: 'array',
    //   of: [
    //     {
    //       type: 'string',
    //       options: {
    //         list: [
    //           { title: "Réemploi", value: "reemploi" },
    //           { title: "Vins tranquilles", value: "vins-tranquilles" },
    //           { title: "Effervescents", value: "effervescents" },
    //           { title: "Vendange", value: "vendange" },
    //           { title: "Matières sèches", value: "matieres-seches" },
    //         ],
    //       }
    //     }
    //   ]
    // }, {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        }
      ]
    }, {
      name: 'url',
      title: 'URL',
      type: 'url',
    }, {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }]
    }
  ]
}

export default project;