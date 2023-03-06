import { client } from './sanity';
import * as queries from './queries';

import type { AboutPage, HomePage } from './types';

export const getAboutPage = (lang?: string) =>
  client.fetch<AboutPage | null>(queries.getAboutPageQuery, { lang });

export const getHomePage = (lang?: string) =>
  client.fetch<HomePage | null>(queries.getHomePageQuery, { lang });
