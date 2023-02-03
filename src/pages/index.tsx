import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Bartosz Krawczyk | Software Developer</title>
        <meta
          name="description"
          content="Software developer focusing on front-end. Working with React, Next.js, Node.js, image processing, WebGL, realtime and scalable apps."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}
