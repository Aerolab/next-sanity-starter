import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-03-06',
  useCdn: process.env.NODE_ENV === 'production'
});

const builder = imageUrlBuilder(client);

export const urlFor = builder.image;
