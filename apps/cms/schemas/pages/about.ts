import {defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'about',
  title: 'About Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'About',
      }
    },
  },
})
