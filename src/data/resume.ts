import type { IconType } from '@/components/common/icon/Icon';
import { dateFmt } from '@/utils/intl';
import { v4 } from 'uuid';

export interface ResumeEntry {
  id: string;
  company: string;
  position: string;
  from: string;
  to: string;
  description: string;
  responsibilites?: string;
  icons?: IconType[];
}

export const resume: ResumeEntry[] = [
  {
    id: v4(),
    company: 'ShareTheBoard',
    position: 'Senior software developer',
    from: dateFmt(new Date('2021-11-1')),
    to: dateFmt('Present'),
    description: 'Tool for sharing traditional whiteboards online.',
    responsibilites:
      'Working with real-time image processing using WebGL, WebWorkers, WebAssembly. Working on low-level optimisations, integrating machine learning models.',
    icons: [
      'Typescript',
      'React',
      'XState',
      'Tailwind CSS',
      'Vite',
      'Electron',
      'WebGL',
      'WebAssembly',
      'TensorFlow.js',
      'NestJS',
      'Playwright',
    ],
  },
  {
    id: v4(),
    company: 'Legalcluster',
    position: 'Senior front-end developer',
    from: dateFmt(new Date('2018-09-1')),
    to: dateFmt(new Date('2021-10-1')),
    description: 'Legaltech SaaS.',
    responsibilites:
      'Managing large, modular codebase, code reviews, mentoring junior developers, choosing front-end stack and tooling',
    icons: ['Typescript', 'React', 'Redux', 'Styled-components', 'Webpack'],
  },
  {
    id: v4(),
    company: 'Pictemi',
    position: 'Co-founder, front-end developer',
    from: dateFmt(new Date('2018-01-10')),
    to: dateFmt(new Date('2023-01-31')),
    description: 'SaaS platform for photographers and their clients.',
    responsibilites: 'Team management, product design, specifying requirements, front-end development',
    icons: ['Typescript', 'React', 'Redux', 'Styled-components', 'Webpack', 'Next.js', 'Cypress'],
  },
  {
    id: v4(),
    company: 'Applandeo / Sabre',
    position: 'Senior front-end developer',
    from: dateFmt(new Date('2017-07-1')),
    to: dateFmt(new Date('2018-08-3')),
    description: 'Contracted to Sabre to work on large SaaS in the hospitality industry.',
    icons: ['Javascript', 'React', 'Redux', 'Webpack'],
  },
  {
    id: v4(),
    company: 'VML',
    position: 'Senior front-end developer',
    from: dateFmt(new Date('2015-09-1')),
    to: dateFmt(new Date('2017-06-3')),
    description: 'Marketing agency.',
    responsibilites:
      'Leading a team of developers, code reviews, choosing front-end tooling. Working with animations, WebAudio API, video, canvas.',
    icons: ['Javascript', 'React', 'jQuery', 'Backbone.js', 'Gulp.js', 'Sass'],
  },
  {
    id: v4(),
    company: 'VML',
    position: 'Mid front-end developer',
    from: dateFmt(new Date('2014/08/1')),
    to: dateFmt(new Date('2015/09/1')),
    description: 'Marketing agency.',
    responsibilites:
      'Front-end development, working with clients, building sites with animations, multimedia, mobile-first',
    icons: ['Javascript', 'React', 'jQuery', 'Backbone.js', 'Gulp.js', 'Sass'],
  },
  {
    id: v4(),
    company: 'Agencja 71',
    position: 'Full-stack web developer',
    from: dateFmt(new Date('2014/02/1')),
    to: dateFmt(new Date('2014/07/1')),
    description: 'Small software house.',
    icons: ['PHP', 'MySQL', 'Javascript', 'jQuery'],
  },
  {
    id: v4(),
    company: 'NannyClub / Investors in Ideas Ltd',
    position: 'Full-stack web developer',
    from: dateFmt(new Date('2013/03/1')),
    to: dateFmt(new Date('2013/04/1')),
    description: 'London based SaaS for childcarers and parents.',
    icons: ['Wordpress', 'PHP', 'MySQL', 'Javascript', 'jQuery'],
  },
];
