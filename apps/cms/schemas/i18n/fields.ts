import {supportedLanguages} from './lang'
import {defineType} from 'sanity'

const capitalize = (str: string, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) => match.toUpperCase())

export const createLocalizedField = (type: string) =>
  defineType({
    title: `Localized ${type}`,
    name: `locale${capitalize(type)}`,
    type: 'object',
    // Fieldsets can be used to group object fields.
    // Here we omit a fieldset for the "default language",
    // making it stand out as the main field.
    fieldsets: [
      {
        title: 'Translations',
        name: 'translations',
        options: {collapsible: true, collapsed: true},
      },
    ],
    // Dynamically define one field per language
    fields: supportedLanguages.map((lang) => ({
      title: lang.title,
      name: lang.id,
      type: type,
      fieldset: lang.isDefault ? undefined : 'translations',
    })),
  })

export const i18nFields = [createLocalizedField('string'), createLocalizedField('text')]
