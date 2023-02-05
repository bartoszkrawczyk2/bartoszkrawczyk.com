import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';
import { TimelineItem, TimelineWrapper } from '../common/Timeline';

export function Resume() {
  return (
    <div className="bg-white">
      <Container>
        <SectionHeader>Resume</SectionHeader>
        <TimelineWrapper>
          <TimelineItem
            company="ShareTheBoard"
            position="Senior software developer"
            from={new Date('2021-11-01')}
            to="Present"
          >
            <p>
              Tool for sharing traditional whiteboards online. Working with real-time image processing using Typescript,
              WebGL, SVG, WebWorkers, WASM. Working on low-level optimisations, integrating ML with tensorflow.js,
              React, XState and Redux, backend work using NestJS.
            </p>
          </TimelineItem>
          <TimelineItem
            company="Legalcluster"
            position="Senior front-end developer"
            from={new Date('2018-09-01')}
            to={new Date('2021-10-01')}
          >
            <p>
              Legaltech SaaS. Typescript, React, Redux, styled-components. Responsibilities including managing large
              codebase, code reviews, mentoring junior developers, deciding on the front-end stack and tooling.
            </p>
          </TimelineItem>
          <TimelineItem
            company="Pictemi"
            position="Co-founder, front-end developer"
            from={new Date('2018-01-10')}
            to={new Date('2023-01-31')}
          >
            <p>
              SaaS platform for photographers. Next.js, Typescript, React, Redux, Css-in-js, SSR. Responsibilities
              including team management, product design, specifying requirements, front-end development.
            </p>
          </TimelineItem>
          <TimelineItem
            company="Applandeo / Sabre"
            position="Senior front-end developer"
            from={new Date('2018-01-10')}
            to={new Date('2023-01-31')}
          >
            <p>Contracted to Sabre to work on large SaaS in the hospitality industry. ES6, React/Redux with SSR.</p>
          </TimelineItem>
          <TimelineItem
            company="VML"
            position="Senior front-end developer"
            from={new Date('2015-09-01')}
            to={new Date('2017-06-31')}
          >
            <p>
              Ad Agency projects. Working with animations, multimedia, Canvas, WebAudio API. Multiple stacks -
              frameworks and libraries including backbone.js, require.js, jQuery, React, Redux, gulp, Sass, Less.
            </p>
          </TimelineItem>
          <TimelineItem
            company="VML"
            position="Mid front-end developer"
            from={new Date('2014-08-01')}
            to={new Date('2015-09-01')}
          >
            <p>
              Ad Agency projects. Working with animations, multimedia, Canvas, WebAudio API. Multiple stacks -
              frameworks and libraries including backbone.js, require.js, jQuery, React, Redux, gulp, Sass, Less.
            </p>
          </TimelineItem>
          <TimelineItem
            company="Agencja 71"
            position="Full-stack web developer"
            from={new Date('2014-02-01')}
            to={new Date('2014-07-01')}
          >
            <p>Small software house. PHP, MySQL, Javascript.</p>
          </TimelineItem>
          <TimelineItem
            company="NannyClub / Investors in Ideas Ltd"
            position="Full-stack web developer"
            from={new Date('2013-03-01')}
            to={new Date('2013-04-01')}
          >
            <p>London based SaaS for childcarers and parents. Wordpress, PHP, MySQL.</p>
          </TimelineItem>
        </TimelineWrapper>
      </Container>
    </div>
  );
}
