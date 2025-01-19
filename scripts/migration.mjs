// import { createClient } from '@sanity/client';
// import axios from 'axios';
// import dotenv from 'dotenv';
// import { fileURLToPath } from 'url';
// import path from 'path';

// // Load environment variables from .env.local
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
//   useCdn: false,
//   token: process.env.SANITY_API_TOKEN,
//   apiVersion: '2021-08-31',
// });

// // Function to upload image to Sanity
// async function uploadImageToSanity(imageUrl) {
//   try {
//     console.log(`Uploading image: ${imageUrl}`);
//     const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
//     const buffer = Buffer.from(response.data);
//     const asset = await client.assets.upload('image', buffer, {
//       filename: imageUrl.split('/').pop(),
//     });
//     console.log(`Image uploaded successfully: ${asset._id}`);
//     return asset._id; // Return the asset ID
//   } catch (error) {
//     console.error('Failed to upload image:', imageUrl, error.message);
//     return null;
//   }
// }

// // Migration script
// async function migrateData() {
//   try {
//     console.log('Fetching products from API...');
//     const response = await axios.get('https://template-0-beta.vercel.app/api/product');
//     const products = response.data;
//     console.log(`Fetched ${products.length} products. Starting migration...`);

//     for (const product of products) {
//       console.log(`Processing product: ${product.name}`);

//       let imageRef = null;

//       // Upload image if imagePath exists
//       if (product.imagePath) {
//         imageRef = await uploadImageToSanity(product.imagePath);
//       } else {
//         console.log(`No image found for product: ${product.name}`);
//       }

//       // Create Sanity document
//       const sanityDocument = {
//         _type: 'product',
//         id: product.id,
//         name: product.name,
//         price: parseFloat(product.price),
//         description: product.description,
//         discountPercentage: product.discountPercentage,
//         isFeaturedProduct: product.isFeaturedProduct,
//         stockLevel: product.stockLevel,
//         category: product.category,
//         image: imageRef
//           ? {
//               _type: 'image',
//               asset: {
//                 _type: 'reference',
//                 _ref: imageRef,
//               },
//             }
//           : undefined,
//       };

//       try {
//         console.log(`Uploading product to Sanity: ${sanityDocument.name}`);
//         const result = await client.create(sanityDocument);
//         console.log(`Product uploaded successfully: ${result._id}`);
//       } catch (error) {
//         console.error(`Error uploading product: ${product.name}`, error);
//       }
//     }

//     console.log('Data migration completed successfully!');
//   } catch (error) {
//     console.error('Error during data migration:', error);
//   }
// }

// migrateData();






// import axios from 'axios';
// import { createClient } from '@sanity/client';
// import dotenv from 'dotenv';

// // Load environment variables
// dotenv.config();
// console.log('Sanity Project ID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
// console.log('Sanity Token:', process.env.SANITY_API_TOKEN);

// // Sanity client configuration using environment variables
// const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Sanity project ID from .env
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,     // Dataset name from .env
//   apiVersion: '2023-01-01',                // Use current date or your API version
//   token: process.env.SANITY_API_TOKEN,         // Sanity token from .env
//   useCdn: false,                           // Set to false to ensure fresh data
// });

// // API URL
// const API_URL = 'https://template-0-beta.vercel.app/api/product';

// async function migrateData() {
//   try {
//     console.log('Fetching data from API...');

//     // Fetch data from the API
//     const { data: products } = await axios.get(API_URL);

//     console.log(`Fetched ${products.length} products. Starting migration...`);

//     // Iterate over each product and insert it into Sanity
//     for (const product of products) {
//       try {
//         const sanityDocument = {
//           _type: 'product',
//           id: product.id,
//           name: product.name,
//           imagePath: product.imagePath,
//           price: parseFloat(product.price),
//           description: product.description,
//           discountPercentage: product.discountPercentage,
//           isFeaturedProduct: product.isFeaturedProduct,
//           stockLevel: product.stockLevel,
//           category: product.category,
//         };

//         // Create document in Sanity
//         await client.create(sanityDocument);
//         console.log(`Product with ID ${product.id} migrated successfully.`);
//       } catch (err) {
//         console.error(`Failed to migrate product with ID ${product.id}:`, err);
//       }
//     }

//     console.log('Data migration completed successfully!');
//   } catch (err) {
//     console.error('Error during data migration:', err);
//   }
// }

// // Execute the migration script
// migrateData();

