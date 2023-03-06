import {defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'home',
  title: 'Home Page',
  fields: [
    {
      name: 'title',
      type: 'localeString',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'localeText',
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
