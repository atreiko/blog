import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

export const clientConfig = {
  projectId: 'bi5etw51',
  dataset: 'production'
}

export const client = sanityClient({
  projectId: clientConfig.projectId,
  dataset: clientConfig.dataset, 
  useCdn: true, 
  apiVersion: '2021-08-31',
  ignoreBrowserTokenWarning: true,
  token: process.env.SANITY_TOKEN,
});

const builder = imageUrlBuilder(client)

export const urlFor = source => builder.image(source)