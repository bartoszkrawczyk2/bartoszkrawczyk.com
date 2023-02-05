import { useIntersectionAnimation } from '@/hooks/useIntersectionAnimation';
import { twMerge } from 'tailwind-merge';
import { Container } from '../common/Container';
import {
  ElectronIcon,
  ExpressIcon,
  NestIcon,
  NextIcon,
  ReactIcon,
  TailwindIcon,
  TypescriptIcon,
  JestIcon,
  PlaywrightIcon,
  ViteIcon,
  WebpackIcon,
  WebGLIcon,
  ReduxIcon,
  NodeIcon,
} from '../common/icons';

export function Intro() {
  const h1 = useIntersectionAnimation<HTMLHeadingElement>({
    hidden: 'opacity-0 -translate-x-16',
    visible: 'opacity-100 translate-x-0',
  });

  const h2 = useIntersectionAnimation<HTMLHeadingElement>({
    hidden: 'opacity-0 -translate-x-16',
    visible: 'opacity-100 translate-x-0',
    base: 'delay-150',
  });

  const buttons = useIntersectionAnimation<HTMLDivElement>({
    hidden: 'opacity-0 -translate-x-16',
    visible: 'opacity-100 translate-x-0',
    base: 'delay-1000 duration-700',
  });

  return (
    <Container className="text-center mt-24">
      <h1
        className={twMerge(
          'text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400 font-extrabold tracking-tighter',
          h1.className
        )}
        ref={h1.ref}
      >
        Hi! I’m Bartosz,
      </h1>
      <h2 ref={h2.ref} className={twMerge('text-5xl mt-4 font-extrabold tracking-tighter', h2.className)}>
        front-end developer.
      </h2>
      <div className={buttons.className} ref={buttons.ref}>
        <div className="flex gap-4 justify-center mt-16">
          <a className="btn text-white bg-gray-900 hover:bg-gray-800" href="#">
            Resume
          </a>
          <a className="btn text-white bg-blue-600 hover:bg-blue-700" href="#">
            Get in touch
          </a>
        </div>
        <div className="flex gap-2 flex-wrap justify-center mt-14">
          <TypescriptIcon dimmed />
          <ReactIcon dimmed />
          <ReduxIcon dimmed />
          <NextIcon dimmed />
          <ViteIcon dimmed />
          <WebpackIcon dimmed />
          <WebGLIcon dimmed />
          <ElectronIcon dimmed />
          <TailwindIcon dimmed />
          <NodeIcon dimmed />
          <ExpressIcon dimmed />
          <NestIcon dimmed />
          <JestIcon dimmed />
          <PlaywrightIcon dimmed />
        </div>
      </div>
    </Container>
  );
}
