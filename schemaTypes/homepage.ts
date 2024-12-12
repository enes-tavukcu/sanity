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
   ]   //groupe de champ pour la partie partenaires
});