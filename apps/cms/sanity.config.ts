import {definePlugin, defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes, pages} from './schemas'
import {deskStructure} from './lib/deskStructure'
import {i18nFields} from './schemas/i18n/fields'
import {languageFilter} from '@sanity/language-filter'
import {supportedLanguages, baseLanguage} from './schemas/i18n/lang'
import {projectId, dataset} from './env'

export const sharedConfig = definePlugin({
  name: 'sharedConfig',
  plugins: [
    languageFilter({
      supportedLanguages,
      defaultLanguages: [baseLanguage!.id],
      documentTypes: pages.map((page) => page.name),
      filterField: (enclosingType, field, selectedLanguageIds) =>
        !enclosingType.name.startsWith('locale') || selectedLanguageIds.includes(field.name),
    }),
    deskTool({
      structure: deskStructure,
    }),
    visionTool(),
  ],
  schema: {
    types: [...pages, ...schemaTypes, ...i18nFields],
  },
})

export default defineConfig([
  {
    name: 'default',
    title: 'Aero Sanity Starter Production',
    basePath: '/prod',
    projectId,
    dataset,
    plugins: [sharedConfig()],
  },
  {
    name: 'staging',
    title: 'Aero Sanity Starter Staging',
    basePath: '/staging',

    dataset: 'staging',
    projectId,

    plugins: [sharedConfig()],
  },
])
