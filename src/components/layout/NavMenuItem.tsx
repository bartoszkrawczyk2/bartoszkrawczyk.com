import { AnchorHTMLAttributes, PropsWithChildren } from 'react';

export function NavMenuItem({ children, ...props }: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>) {
  return (
    <li className="after:content-['/'] last:after:hidden">
      <a className="px-2 sm:px-4" {...props}>
        {children}
      </a>
    </li>
  );
}
