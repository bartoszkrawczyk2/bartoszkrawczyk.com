import classNames from 'classnames';
import { useMemo, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { useIntersectionObserver } from 'usehooks-ts';

type IntersectionObserverArgs = Parameters<typeof useIntersectionObserver>[1];

interface IntersectionObserverOptions extends IntersectionObserverArgs {
  hidden: string;
  visible: string;
  base?: string;
  getVisibility?(intersection: IntersectionObserverEntry | undefined): boolean;
}

export function useIntersectionAnimation<T extends HTMLElement>({
  hidden,
  visible,
  base,
  getVisibility,
  ...options
}: IntersectionObserverOptions) {
  const ref = useRef<T>(null);
  const intersection = useIntersectionObserver(ref, options || {});
  const isVisible = getVisibility?.(intersection) ?? intersection?.isIntersecting;

  return useMemo(
    () => ({
      ref,
      className: classNames(twMerge('transition-all duration-500 ease-in-out', base), {
        [visible]: isVisible,
        [hidden]: !isVisible,
      }),
    }),
    [base, hidden, isVisible, visible]
  );
}
