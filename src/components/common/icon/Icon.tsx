import dynamic from 'next/dynamic';
import { BaseIconProps } from './BaseIcon';

const iconsComponents = {
  Electron: dynamic(() => import('./icons/Electron')),
  Express: dynamic(() => import('./icons/Express')),
  Github: dynamic(() => import('./icons/Github')),
  Javascript: dynamic(() => import('./icons/Javascript')),
  Jest: dynamic(() => import('./icons/Jest')),
  LinkedIn: dynamic(() => import('./icons/LinkedIn')),
  NestJS: dynamic(() => import('./icons/Nest')),
  'Next.js': dynamic(() => import('./icons/Next')),
  'Node.js': dynamic(() => import('./icons/Node')),
  Playwright: dynamic(() => import('./icons/Playwright')),
  React: dynamic(() => import('./icons/React')),
  Redux: dynamic(() => import('./icons/Redux')),
  'Tailwind CSS': dynamic(() => import('./icons/Tailwind')),
  Twitter: dynamic(() => import('./icons/Twitter')),
  Typescript: dynamic(() => import('./icons/Typescript')),
  Vite: dynamic(() => import('./icons/Vite')),
  WebGL: dynamic(() => import('./icons/WebGL')),
  Webpack: dynamic(() => import('./icons/Webpack')),
  XState: dynamic(() => import('./icons/XState')),
  WebAssembly: dynamic(() => import('./icons/Wasm')),
  'TensorFlow.js': dynamic(() => import('./icons/Tf')),
  'Styled-components': dynamic(() => import('./icons/Styled')),
  Cypress: dynamic(() => import('./icons/Cypress')),
  jQuery: dynamic(() => import('./icons/JQuery')),
  'Backbone.js': dynamic(() => import('./icons/Backbone')),
  'Gulp.js': dynamic(() => import('./icons/Gulp')),
  Sass: dynamic(() => import('./icons/Sass')),
  PHP: dynamic(() => import('./icons/Php')),
  MySQL: dynamic(() => import('./icons/MySQL')),
  Wordpress: dynamic(() => import('./icons/Wordpress')),
};

export type IconType = keyof typeof iconsComponents;

export function Icon({ icon, ...props }: BaseIconProps & { icon: IconType }) {
  const Component = iconsComponents[icon];
  if (!Component) return null;
  return <Component {...props} />;
}
