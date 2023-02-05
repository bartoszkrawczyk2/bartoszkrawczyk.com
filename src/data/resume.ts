import { dateFmt } from '@/utils/intl';
import { v4 } from 'uuid';

export interface ResumeEntry {
  id: string;
  company: string;
  position: string;
  from: string;
  to: string;
  description: string;
}

export const resume: ResumeEntry[] = [
  {
    id: v4(),
    company: 'ShareTheBoard',
    position: 'Senior software developer',
    from: dateFmt(new Date('2021-11-1')),
    to: dateFmt('Present'),
    description:
      'Tool for sharing traditional whiteboards online. Working with real-time image processing using Typescript, WebGL, SVG, WebWorkers, WASM. Working on low-level optimisations, integrating ML with tensorflow.js, React, XState and Redux, backend work using NestJS.',
  },
  {
    id: v4(),
    company: 'Legalcluster',
    position: 'Senior front-end developer',
    from: dateFmt(new Date('2018-09-1')),
    to: dateFmt(new Date('2021-10-1')),
    description:
      'Legaltech SaaS. Typescript, React, Redux, styled-components. Responsibilities including managing large codebase, code reviews, mentoring junior developers, deciding on the front-end stack and tooling.',
  },
  {
    id: v4(),
    company: 'Pictemi',
    position: 'Co-founder, front-end developer',
    from: dateFmt(new Date('2018-01-10')),
    to: dateFmt(new Date('2023-01-31')),
    description:
      'SaaS platform for photographers. Next.js, Typescript, React, Redux, Css-in-js, SSR. Responsibilities including team management, product design, specifying requirements, front-end development.',
  },
  {
    id: v4(),
    company: 'Applandeo / Sabre',
    position: 'Senior front-end developer',
    from: dateFmt(new Date('2017-07-1')),
    to: dateFmt(new Date('2018-08-3')),
    description: 'Contracted to Sabre to work on large SaaS in the hospitality industry. ES6, React/Redux with SSR.',
  },
  {
    id: v4(),
    company: 'VML',
    position: 'Senior front-end developer',
    from: dateFmt(new Date('2015-09-1')),
    to: dateFmt(new Date('2017-06-3')),
    description:
      'Ad Agency projects. Working with animations, multimedia, Canvas, WebAudio API. Multiple stacks - frameworks and libraries including backbone.js, require.js, jQuery, React, Redux, gulp, Sass, Less.',
  },
  {
    id: v4(),
    company: 'VML',
    position: 'Mid front-end developer',
    from: dateFmt(new Date('2014/08/1')),
    to: dateFmt(new Date('2015/09/1')),
    description:
      'Ad Agency projects. Working with animations, multimedia, Canvas, WebAudio API. Multiple stacks - frameworks and libraries including backbone.js, require.js, jQuery, React, Redux, gulp, Sass, Less.',
  },
  {
    id: v4(),
    company: 'Agencja 71',
    position: 'Full-stack web developer',
    from: dateFmt(new Date('2014/02/1')),
    to: dateFmt(new Date('2014/07/1')),
    description: 'Small software house. PHP, MySQL, Javascript.',
  },
  {
    id: v4(),
    company: 'NannyClub / Investors in Ideas Ltd',
    position: 'Full-stack web developer',
    from: dateFmt(new Date('2013/03/1')),
    to: dateFmt(new Date('2013/04/1')),
    description: 'London based SaaS for childcarers and parents. Wordpress, PHP, MySQL.',
  },
];
