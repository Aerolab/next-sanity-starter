import {definePlugin, defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes, pages} from './schemas'
import {deskStructure} from './lib/deskStructure'

export const sharedConfig = definePlugin({
  name: 'sharedConfig',
  plugins: [
    deskTool({
      structure: deskStructure,
    }),
    visionTool(),
  ],
  schema: {
    types: pages.concat(schemaTypes),
  },
})

export default defineConfig([
  {
    name: 'default',
    title: 'Aero Sanity Starter Production',
    basePath: '/prod',
    projectId: 'pp4gekcd',
    dataset: 'production',
    plugins: [sharedConfig()],
  },
  {
    name: 'staging',
    title: 'Aero Sanity Starter Staging',
    basePath: '/staging',

    dataset: 'staging',
    projectId: 'pp4gekcd',

    plugins: [sharedConfig()],
  },
])
