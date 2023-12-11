import type { Metadata } from 'next'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  siteName: 'Next 14 E-Commerce with Payload CMS',
  title: 'Next 14 E-Commerce with Payload CMS',
  description: 'An open-source e-commerce store built with Payload and Next.js.',
  images: [
    {
      url: 'https://i.ibb.co/NTF7Mp5/Apple-Device-Mockups-in-Dark-Mode-Freebie.jpg',
    },
  ],
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
