import { Intro } from '@/components/home/Intro';
import { Resume } from '@/components/home/Resume';
import { Nav } from '@/components/layout/Nav';
import Head from 'next/head';

export default function Home() {
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
      <Resume />
    </>
  );
}
