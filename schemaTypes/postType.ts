import { defineField, defineType } from 'sanity'

export const personnageType = defineType({
  name: 'personnages',
  title: 'Personnages',
  type: 'document',
  groups: [
    {
      name: 'seo',
      title: 'seo',
    },
  ],
  fields: [
    defineField({
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
    }),
    defineField({
        name: 'title',
        title: 'Titre',
        type: 'string',
      }),
      defineField({
        name: 'description',
        title: 'Description',
        type: 'text',
      }),
      defineField({
        name: 'image',
        title: 'Image',
        type: 'image',
      })
  ],
})