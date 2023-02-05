import classNames from 'classnames';
import { PropsWithChildren, SVGProps } from 'react';
import { twMerge } from 'tailwind-merge';
import style from './BaseIcon.module.css';

export interface BaseIconProps extends Omit<SVGProps<SVGSVGElement>, 'children'> {
  dimmed?: boolean;
}

export const BaseIconSvg = ({ children, className, dimmed, color, ...props }: PropsWithChildren<BaseIconProps>) => (
  <svg
    style={{ color }}
    viewBox="0 0 128 128"
    className={classNames(twMerge('h-8', className), {
      [style.dimmed]: dimmed,
    })}
    {...props}
  >
    {children}
  </svg>
);
