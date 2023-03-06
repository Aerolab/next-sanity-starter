import groq from 'groq';

export const getHomePageQuery = groq`
  *[_id == "home"][0] {
    'title': title[$lang],
    'description': description[$lang]
  }
`;

export const getAboutPageQuery = groq`
  *[_id == "about"][0] {
    'title': title[$lang],
    image {
      asset-> {
        _id,
        'lqip': metadata.lqip,
      }
    }
  }
`;
