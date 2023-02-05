import { Contact } from '@/components/home/Contact';
import { Intro } from '@/components/home/Intro';
import { Resume } from '@/components/home/Resume';
import { Footer } from '@/components/layout/Footer';
import { Nav } from '@/components/layout/Nav';
import { resume, ResumeEntry } from '@/data/resume';
import { GetStaticProps } from 'next';
import Head from 'next/head';

interface HomeProps {
  resume: ResumeEntry[];
}

export default function Home({ resume }: HomeProps) {
  return (
    <>
      <Head>
        <title>Bartosz Krawczyk | Software Developer</title>
        <meta
          name="description"
          content="Software developer focusing on front-end. Working with React, Next.js, Node.js, Redux, image processing, WebGL, realtime and scalable apps."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Intro />
      <Resume resume={resume} />
      <Contact />
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = () => {
  return {
    props: {
      resume,
    },
  };
};
