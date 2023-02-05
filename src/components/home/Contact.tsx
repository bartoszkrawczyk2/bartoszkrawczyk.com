import { Container } from '../common/Container';
import { Icon } from '../common/icon/Icon';
import { SectionHeader } from '../common/SectionHeader';

export function Contact() {
  return (
    <Container id="contact">
      <SectionHeader>Get in touch</SectionHeader>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
        <a
          className="btn text-white bg-gray-900 hover:bg-gray-800"
          href="https://www.linkedin.com/in/bartoszkrawczyk/"
          target="_blank"
          rel="noreferrer"
        >
          <Icon icon="LinkedIn" className="[&>path]:fill-white" /> LinkedIn
        </a>
        <a
          className="btn text-white bg-gray-900 hover:bg-gray-800"
          href="https://github.com/bartoszkrawczyk2"
          target="_blank"
          rel="noreferrer"
        >
          <Icon icon="Github" className="[&>g]:fill-white" /> Github
        </a>
        <a
          className="btn text-white bg-gray-900 hover:bg-gray-800"
          href="https://twitter.com/bartosz_kr"
          target="_blank"
          rel="noreferrer"
        >
          <Icon icon="Twitter" className="[&>path]:fill-white" /> Twitter
        </a>
      </div>
    </Container>
  );
}
