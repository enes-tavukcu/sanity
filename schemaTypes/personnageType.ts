// personnageType.ts
import {defineField, defineType} from 'sanity'

export const personnageType = defineType({
  name: 'personnage',
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
      name: 'title',
      type: 'string',
      title: 'Titre',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Publié le',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
    }),
    defineField({
      name: 'body',
      type: 'array',
      title: 'Contenu',
      of: [{type: 'block'}],
    }),

    //relation one-to-many
    defineField({
      name: 'categories',
      type: 'array',
      title: 'Catégories',
      of: [
        {
          type: 'reference',
          to: [{type: 'category'}],
        },
      ],
    }),

    //relation one-to-one
    defineField({
      name: 'category',
      type: 'reference',
      title: 'Category',
      to: { type: 'category' }
        
    }),
    defineField({
      name: 'relatedPosts',
      type: 'array',
      title: 'Articles associés',
      of: [
        {
          type: 'reference',
          to: [{type: 'personnage'}],
        },
      ],
    }),
    defineField({
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
    }),
  ],
})
