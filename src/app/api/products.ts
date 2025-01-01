// import { client } from "../../sanity/lib/client";
// import { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     const query = `*[_type == "product"]{
//       _id,
//       title,
//       price,
//       description,
//       image{
//         asset->{
//           _id,
//           url
//         }
//       }
//     }`;

//     const products = await client.fetch(query);

//     res.status(200).json(products);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to fetch data from Sanity' });
//   }
// }

