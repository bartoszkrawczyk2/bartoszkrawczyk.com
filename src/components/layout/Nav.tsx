import Image from 'next/image';
import Link from 'next/link';
import { Container } from '../common/Container';
import me from '../../static/me.jpeg';
import { NavMenuItem } from './NavMenuItem';

export function Nav() {
  return (
    <div className="sticky top-0 z-10 nav-scroll-animate">
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
