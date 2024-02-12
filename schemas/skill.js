export default {
    name: 'skill',
    title: 'Skill',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'type',
            title: 'Type',
            type: 'string',
            options: {
                list: ['Frontend', 'Backend', 'Languages', 'Hardware', 'Other']
            }
        }
    ]
}