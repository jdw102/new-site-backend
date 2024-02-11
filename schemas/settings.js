export default {
    name: 'settings',
    type: 'document',
    title: 'Settings',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'welcomeMessage',
            type: 'text',
            title: 'Welcome Message'
        },
        {
            name: 'backgroundImage',
            type: 'image',
            title: 'Background Image'
        },
        {
            name: "avatar",
            type: 'document',
            title: "Avatar",
            fields: [
                {
                    name: "picture",
                    type: 'image',
                    title: "Picture"
                    },
                    {
                    name: 'title',
                    type: 'string',
                    title: 'Title'
                    },
                    {
                    name: 'name',
                    type: 'string',
                    title: 'Name'
                    }
            ]
        },
        {
            name: 'about',
            type: 'document',
            title: 'About',
            fields: [
                {
                    name: 'aboutTitle',
                    type: 'string',
                    title: 'Title'
                },
                {
                    name: 'aboutMe',
                    type: 'text',
                    title: 'Description'
                },
                {
                    name: 'aboutImage',
                    type: 'image',
                    title: 'Image'
                }
            ]
        },
        {
            name: 'resume',
            type: 'file',
            title: 'Resume'
        },
        {
            name: 'socialLinks',
            type: 'array',
            title: 'Social Links',
            of: [
                {
                    type: 'document',
                    fields: [
                        {
                            name: 'name',
                            type: 'string',
                            title: 'Name'
                        },
                        {
                            name: 'url',
                            type: 'url',
                            title: 'URL'
                        }
                    ]
                }
            ]
        },
        {
            name: 'email',
            type: 'string',
            title: 'Email'
        }
    ]
  }