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
      name: 'type',
      title: 'Type',
      type: 'string'
    }, {
      name: 'year',
      title: 'Year',
      type: 'string'
    }, {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title'
      }
    }, {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              { title: "UX", value: "ux" },
              { title: "Design", value: "design" },
              { title: "Coding", value: "coding" },
              { title: "3D", value: "3d" },
              { title: "Motion", value: "motion" },
              { title: "Identity", value: "identity" },
              { title: "Print", value: "print" },
              { title: "VR", value: "vr" },
              { title: "VJ", value: "vj" },
              { title: "Installation", value: "installation" },
              { title: "Mapping", value: "mapping" },
              { title: "Video", value: "video" },
            ],
          }
        }
      ]
    }, {
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
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }]
    }, {
      name: 'liveUrl',
      title: 'Live URL',
      type: 'url',
    }, {
      name: 'tools',
      title: 'Tools',
      type: 'array',
      of: [{ type: 'string' }]
    }, {
      name: 'team',
      title: 'Team',
      type: 'array',
      of: [{ type: 'string' }]
    }
  ]
}

export default project;