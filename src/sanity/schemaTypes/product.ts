
import { defineType, defineField } from 'sanity';




// import { defineType, defineField } from 'sanity';
// export default {
//   name: 'product',
//   title: 'Product',
//   type: 'document',
//   fields: [
//     {
//       name: 'id',
//       title: 'ID',
//       type: 'string',
//     },
//     {
//       name: 'name',
//       title: 'Name',
//       type: 'string',
//     },
//     {
//       name: 'imagePath',
//       title: 'Image Path',
//       type: 'url',
//     },
//     {
//       name: 'price',
//       title: 'Price',
//       type: 'number',
//     },
//     {
//       name: 'description',
//       title: 'Description',
//       type: 'text',
//     },
//     {
//       name: 'discountPercentage',
//       title: 'Discount Percentage',
//       type: 'number',
//     },
//     {
//       name: 'isFeaturedProduct',
//       title: 'Is Featured Product',
//       type: 'boolean',
//     },
//     {
//       name: 'stockLevel',
//       title: 'Stock Level',
//       type: 'number',
//     },
//     {
//       name: 'category',
//       title: 'Category',
//       type: 'string',
//     },
//   ],
// };



export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'inventory',
      title: 'Inventory',
      type: 'number',
      validation: (Rule) => Rule.min(0).warning('Inventory cannot be negative!'),
    }),
    defineField({
      name: 'colors',
      title: 'Colors',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              { title: 'Purple', value: '#816DFA' },
              { title: 'Black', value: '#000000' },
              { title: 'Brown', value: '#CDBA7B' },
            ],
          },
        },
      ],
    }),
  
  ],
  
});
