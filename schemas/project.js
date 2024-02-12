export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'date',
            title: 'Date',
            type: 'datetime'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'thumbnail',
            title: 'Thumbnail',
            type: 'image',
        },
        {
            name: 'viewLink',
            title: 'View Link',
            type: 'document',
            fields:
            [
                {
                    name: 'text',
                    title: 'Text',
                    type: 'string'
                },
                {
                    name: 'fieldType',
                    title: 'Field Type',
                    type: 'string',
                    options: {
                      list: ['string', 'file']
                    }
                },
                {
                    name: 'link',
                    title: 'Link',
                    type: 'string',
                    hidden: ({ parent }) => !parent || parent.fieldType !== 'string'
                },
                {
                    name: 'file',
                    title: 'File',
                    type: 'file',
                    hidden: ({ parent }) => !parent || parent.fieldType !== 'file'
                }
            ]
        },
        {
            name: 'techStack',
            title: 'Tech Stack',
            type: 'array',
            of: [
                {
                    type: 'string'
                }
            ],
            options: {
                layout: 'tags'
            }
        }
    ],
    initialValue: {
        viewLink: {
            fieldType: 'string'
        }
    }
}