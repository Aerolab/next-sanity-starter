import {StructureBuilder} from 'sanity/desk'
import {RiPagesFill} from 'react-icons/ri'
import {schemaTypes, pages} from '../schemas'

export const getPagesStructure = (S: StructureBuilder) =>
  S.listItem()
    .title('Pages')
    .icon(RiPagesFill)
    .child(
      S.list()
        .title('Pages')
        .items(
          pages.map((page) =>
            S.listItem()
              .icon(page.icon ?? RiPagesFill)
              .title(page.title ?? page.name)
              .child(
                S.document()
                  .schemaType(page.name)
                  .documentId(page.name)
                  .title(page.title ?? page.name)
              )
          )
        )
    )

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      ...schemaTypes.map((schema) => S.documentTypeListItem(schema.name)),
      getPagesStructure(S),
    ])
