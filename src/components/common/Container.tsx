import { forwardRef, HTMLAttributes, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export const Container = forwardRef<HTMLDivElement, PropsWithChildren<HTMLAttributes<HTMLDivElement>>>(
  ({ children, className, ...props }, ref) => (
    <div className={twMerge('max-w-6xl mx-auto px-4 sm:px-6 py-2', className)} {...props} ref={ref}>
      {children}
    </div>
  )
);

Container.displayName = 'Container';
