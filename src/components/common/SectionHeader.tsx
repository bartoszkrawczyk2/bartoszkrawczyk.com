import { HTMLAttributes, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export const SectionHeader = ({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>) => (
  <h2
    className={twMerge('text-2xl sm:text-3xl text-center font-extrabold tracking-tighter my-12', className)}
    {...props}
  >
    {children}
  </h2>
);
