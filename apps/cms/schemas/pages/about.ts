import {defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'about',
  title: 'About Page',
  fields: [
    {
      name: 'title',
      type: 'localeString',
      title: 'Title',
      validation: (Rule) => Rule.required(),
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
