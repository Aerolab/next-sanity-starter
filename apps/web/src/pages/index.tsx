import type { FC } from 'react';
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { getHomePage } from '@/lib/api';

type HomeProps = InferGetStaticPropsType<typeof getStaticProps>;

const Home: FC<HomeProps> = ({ page }) => {
  return (
    <div>
      <h1>{page.title}</h1>
      <p>{page.description}</p>
    </div>
  );
};

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  const page = await getHomePage(locale);

  if (!page) {
    return {
      notFound: true,
      props: {} as never
    };
  }

  return {
    props: {
      page
    },
    revalidate: 60
  };
};

export default Home;
