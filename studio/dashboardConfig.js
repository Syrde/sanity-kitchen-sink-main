export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62a227a57f314f0692d1c293',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-main-studio-9vasyap6',
                  apiId: '80ab7190-2437-47c8-9e72-adfa15d1991b'
                },
                {
                  buildHookId: '62a227a57f314f0856d1be54',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-main-web',
                  apiId: '38f2eaf1-0384-4cc2-be59-4a01c75b8f6d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Syrde/sanity-kitchen-sink-main',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-main-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
