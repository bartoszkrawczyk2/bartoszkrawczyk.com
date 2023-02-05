import { useIntersectionAnimation } from '@/hooks/useIntersectionAnimation';
import { twMerge } from 'tailwind-merge';
import { Container } from '../common/Container';
import { Icon } from '../common/icon/Icon';

export function Intro() {
  const h1 = useIntersectionAnimation<HTMLHeadingElement>({
    hidden: 'opacity-0 -translate-x-16',
    visible: 'opacity-100 translate-x-0',
    freezeOnceVisible: true,
  });

  const h2 = useIntersectionAnimation<HTMLHeadingElement>({
    hidden: 'opacity-0 -translate-x-16',
    visible: 'opacity-100 translate-x-0',
    base: 'delay-300',
    freezeOnceVisible: true,
  });

  return (
    <Container className="text-center mt-12 sm:mt-24">
      <h1
        className={twMerge(
          'text-4xl sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400 font-extrabold tracking-tighter',
          h1.className
        )}
        ref={h1.ref}
      >
        Hi! I’m Bartosz,
      </h1>
      <h2
        ref={h2.ref}
        className={twMerge('text-2xl sm:text-5xl mt-2 sm:mt-4 font-extrabold tracking-tighter', h2.className)}
      >
        front-end developer.
      </h2>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 sm:mt-16 items-center">
        <a className="btn text-white bg-gray-900 hover:bg-gray-800" href="#">
          Resume
        </a>
        <a className="btn text-white bg-blue-600 hover:bg-blue-700" href="#">
          Get in touch
        </a>
      </div>
      <div className="flex gap-2 flex-wrap justify-center mt-14 w-52 sm:w-auto mx-auto mb-14 sm:mb-20">
        <Icon icon="Typescript" dimmed />
        <Icon icon="React" dimmed />
        <Icon icon="Redux" dimmed />
        <Icon icon="Next.js" dimmed />
        <Icon icon="Vite" dimmed />
        <Icon icon="Webpack" dimmed />
        <Icon icon="WebGL" dimmed />
        <Icon icon="Electron" dimmed />
        <Icon icon="Tailwind CSS" dimmed />
        <Icon icon="Node.js" dimmed />
        <Icon icon="Express" dimmed />
        <Icon icon="NestJS" dimmed />
        <Icon icon="Jest" dimmed />
        <Icon icon="Playwright" dimmed />
      </div>
    </Container>
  );
}
