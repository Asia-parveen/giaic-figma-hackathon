

import { createClient } from 'next-sanity';
// import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-12-25',
  useCdn: false, // Set to false if you need real-time updates or static generation
});




