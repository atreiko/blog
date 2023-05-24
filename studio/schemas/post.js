import {defineType} from 'sanity'

const textEditorStyles = [
  {title: 'Paragraph', value: 'normal'},
  {title: 'Heading 1', value: 'h1'},
  {title: 'Heading 2', value: 'h2'},
  {title: 'Heading 3', value: 'h3'},
  {title: 'Bullet', value: 'bullet'},
  {title: 'Numbered', value: 'number'},
  {title: 'Quote', value: 'blockquote'},
]

export default defineType({
  name: 'post',
  type: 'document',
  title: 'Post',

  groups: [
    {
      name: 'content',
      title: 'Content',
    },
    {
      name: 'meta',
      title: 'Meta',
    },
  ],

  fields: [
    {
      name: 'meta_title',
      type: 'string',
      title: 'Meta title',
      group: 'meta',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      group: 'content',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publishedDate',
      type: 'date',
      title: 'Published Date',
      group: 'content',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      group: 'content',
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
      ],
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      group: 'content',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 200,
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      group: 'content',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'body',
      type: 'array',
      title: 'Body content',
      group: 'content',
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: 'block',
          styles: textEditorStyles,
        },
        { type: 'image' },
      ],
    },
  ],
})
