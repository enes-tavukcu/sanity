import { defineArrayMember, defineField, defineType} from 'sanity'

export const homepage = defineType({
  name: 'homepage',
  title: 'homepage',
  type: 'document',
  options: {
    singleton: true
  },
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    //groupe de champ pour la partie hero banner 


    defineField({
        type: 'object',
        name: 'hero',
        fields: [
          {
            type: 'string', 
            name: 'title'
        },
          {
            type: 'string', 
            name: 'text'},
            {
                name: 'images', 
             type: 'image'},
          {
            name: 'stats', 
           type: 'array', 
           title: 'Stats', 
           of: [
            defineArrayMember({
                type: 'object',
                name: 'stats',
                fields: [
                  {type:'string', name: 'value'},
                  {type:'string', name: 'text'},
                        ]
                              })
                ]
          }
        ]
  }),

  defineField({
    type: 'object',
    name: 'actualite',
    fields: [
      {
        type: 'string', 
        name: 'title'
    },
      {
        type: 'string', 
        name: 'text'},
        
      {
        name: 'actualites', 
       type: 'array', 
       title: 'Actualités',  
       of: [
        defineArrayMember({
            type: 'object',
            name: 'actualite',
            fields: [
              {type:'image', name: 'image'},
              {type:'string', name: 'titre'},
              {type:'string', name: 'text'},
                    ]
                          })
            ]
      }
    ]
}),


defineField({
  type: 'object',
  name: 'pricing',
  fields: [
    {
      type: 'string', 
      name: 'title'
  },
    {
      type: 'string', 
      name: 'text'},
      
    {
      name: 'abonnements', 
     type: 'array', 
     title: 'Abonnements',  
     of: [
      defineArrayMember({
          type: 'object',
          name: 'abonnement',
          fields: [
            {type:'image', name: 'image'},
            {type:'string', name: 'titre'},
            {type:'string', name: 'text'},
            {type:'number', name: 'prix'},
                  ]
                        })
          ]
    }
  ]
}),


defineField({
  type: 'object',
  name: 'temoignage',
  fields: [
    {
      type: 'string', 
      name: 'title'
  },
    {
      type: 'string', 
      name: 'text'},
      
    {
      name: 'temoignages', 
     type: 'array', 
     title: 'Temoignages',  
     of: [
      defineArrayMember({
          type: 'object',
          name: 'temoignage',
          fields: [
            {type:'image', name: 'image'},
            {type:'string', name: 'nom'},
            {type:'string', name: 'text'},
            {type:'number', name: 'note'},
                  ]
                        })
          ]
    }
  ]
}),

defineField({
  type: 'object',
  name: 'partenaires',
  fields: [
    {
      type: 'string', 
      name: 'title'
  },
    {
      type: 'string', 
      name: 'text'},

      {
        type: 'image', 
        name: 'image',
      },
      
    {
      name: 'partenaires', 
     type: 'array', 
     title: 'Partenaires',  
     of: [
      defineArrayMember({
          type: 'object',
          name: 'partenaire',
          fields: [
            {type:'image', name: 'image'},
           
                  ]
                        })
          ]
    }
  ]
}),

   ]   //groupe de champ pour la partie partenaires
});