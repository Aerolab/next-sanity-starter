export interface HomePage {
  title: string;
  description: string;
}

export interface AboutPage {
  title: string;
  image?: { asset: { _id: string; lqip: string } };
}
