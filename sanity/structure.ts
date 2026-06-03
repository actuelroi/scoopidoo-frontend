import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Scoopido Market place')
    .items([
      S.documentTypeListItem("product").title("Products"),
      //S.documentTypeListItem("categories").title("Categories"),

      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !["product"].includes(item.getId()!),
      ),
    ])
