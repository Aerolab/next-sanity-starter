import type { FC } from 'react';
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Image from 'next/image';

import { getAboutPage } from '@/lib/api';
import { urlFor } from '@/lib/sanity';

type AboutProps = InferGetStaticPropsType<typeof getStaticProps>;

const About: FC<AboutProps> = ({ page }) => {
  return (
    <div>
      <h1>{page.title}</h1>
      {page.image && (
        <Image
          width={400}
          height={400}
          alt="About image"
          placeholder="blur"
          blurDataURL={page.image.asset.lqip}
          src={urlFor(page.image).width(400).height(400).url()}
        />
      )}
    </div>
  );
};

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  const page = await getAboutPage(locale);

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

export default About;
