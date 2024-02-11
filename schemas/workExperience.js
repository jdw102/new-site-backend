export default {
    name: 'workExperience',
    type: 'document',
    title: 'Work Experience',
    fields: [
        {
            name: 'company',
            type: 'string',
            title: 'Company'
        },
        {
            name: 'position',
            type: 'string',
            title: 'Position'
        },
        {
            name: 'startDate',
            type: 'date',
            title: 'Start Date'
        },
        {
            name: 'endDate',
            type: 'date',
            title: 'End Date'
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description'
        },
        {
            name: 'logo',
            type: 'image',
            title: 'Logo'
        }
    ],
    orderings: [
        {
          title: 'Start Date',
          name: 'startDate',
          by: [
            {field: 'startDate', direction: 'asc'}
          ]
        },
        {
          title: 'End Date',
          name: 'endDate',
          by: [
            {field: 'endDate', direction: 'asc'}
          ]
        }
      ]
    
}