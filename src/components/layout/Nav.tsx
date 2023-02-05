import Image from 'next/image';
import Link from 'next/link';
import { Container } from '../common/Container';
import me from '../../static/me.jpeg';
import { useIntersectionAnimation } from '@/hooks/useIntersectionAnimation';
import { twMerge } from 'tailwind-merge';
import { NavMenuItem } from './NavMenuItem';

export function Nav() {
  const { ref, className } = useIntersectionAnimation<HTMLDivElement>({
    visible: 'backdrop-blur bg-white bg-opacity-50 shadow-sm',
    hidden: 'backdrop-blur-0 bg-transparent',
    base: 'duration-300',
    threshold: 1,
    getVisibility: (intersection) => (intersection ? intersection.intersectionRatio < 1 : false),
  });

  return (
    <div ref={ref} className={twMerge('sticky top-[-1px] z-10', className)}>
      <Container className="flex flex-col sm:flex-row items-center justify-between py-4 ">
        <Link
          href="/"
          className="relative group opacity-90 hover:opacity-100 transition-all hover:shadow-lg rounded-full duration-300"
        >
          <Image
            src={me}
            alt="Profile Picture"
            className="rounded-full w-10 md:w-12 h-10 md:h-12 saturate-0 group-hover:saturate-100 transition-all duration-300"
          />
          <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 mix-blend-hard-light opacity-90 group-hover:opacity-0 transition-opacity rounded-full duration-300" />
        </Link>
        <ul className="flex mt-2 sm:mt-4">
          <NavMenuItem href="#resume">Resume</NavMenuItem>
          <NavMenuItem href="https://github.com/bartoszkrawczyk2" target="_blank" rel="noreferrer">
            Github
          </NavMenuItem>
          <NavMenuItem href="#contact">Get in touch</NavMenuItem>
        </ul>
      </Container>
    </div>
  );
}
