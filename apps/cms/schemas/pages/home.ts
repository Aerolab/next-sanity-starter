import {defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'home',
  title: 'Home Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Home',
      }
    },
  },
})
