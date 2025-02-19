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
              // { title: "UX", value: "UX" },
              { title: "Design", value: "Design" },
              { title: "Coding", value: "Coding" },
              // { title: "3D", value: "3D" },
              // { title: "Motion", value: "Motion" },
              // { title: "Identity", value: "Identity" },
              // { title: "Print", value: "Print" },
              // { title: "VR", value: "VR" },
              // { title: "VJ", value: "VJ" },
              // { title: "Mapping", value: "Mapping" },
              { title: "Installation", value: "Installation" },
              { title: "Video", value: "Video" },
              { title: "Performance", value: "Performance" },
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
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true
          },
          fields: [{
            name: 'alt',
            title: 'Alt',
            type: 'string',
          }]
        }
      ]
    }, {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }]
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
    }, {
      name: 'liveUrl',
      title: 'Live URL',
      type: 'url',
    }, {
      name: 'githubUrl',
      title: 'Github URL',
      type: 'url',
    }, {
      name: 'vimeo',
      title: 'Vimeo',
      type: 'string',
    }, {
      name: 'localVideo',
      title: 'Local video',
      type: 'string',
    }, {
      name: 'youtube',
      title: 'Youtube',
      type: 'string',
    }, {
      name: 'music',
      title: 'Music',
      type: 'string',
    }, {
      name: 'orderRank',
      title: 'Order rank',
      type: 'string',
      hidden: ({document} : any) => !document?.title
    }
  ]
}

export default project;