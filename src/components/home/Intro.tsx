import { Container } from '../common/Container';
import { Icon, IconType } from '../common/icon/Icon';

export function Intro() {
  const icons: IconType[] = [
    'Typescript',
    'React',
    'Redux',
    'Next.js',
    'Vite',
    'Webpack',
    'WebGL',
    'Electron',
    'Tailwind CSS',
    'Node.js',
    'Express',
    'Jest',
    'Playwright',
  ];

  return (
    <Container className="text-center mt-12 sm:mt-24">
      <h1 className="text-4xl sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400 font-extrabold tracking-tighter animate-on-load">
        Hi! I'm Bartosz,
      </h1>
      <h2 className="text-2xl sm:text-5xl mt-2 sm:mt-4 font-extrabold tracking-tighter animate-on-load-delayed">
        front-end developer.
      </h2>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 sm:mt-16 items-center">
        <a className="btn text-white bg-gray-900 hover:bg-gray-800" href="#resume">
          Resume
        </a>
        <a className="btn text-white bg-blue-600 hover:bg-blue-700" href="#contact">
          Get in touch
        </a>
      </div>
      <div className="flex gap-2 flex-wrap justify-center mt-14 w-52 sm:w-auto mx-auto mb-2 sm:mb-8">
        {icons.map((icon) => (
          <span key={icon} title={icon}>
            <Icon icon={icon} dimmed />
          </span>
        ))}
      </div>
    </Container>
  );
}
