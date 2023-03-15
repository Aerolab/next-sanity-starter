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
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'localeText',
      title: 'Description',
      validation: (Rule) => Rule.required(),
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
