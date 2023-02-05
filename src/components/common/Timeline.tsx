import { useIntersectionAnimation } from '@/hooks/useIntersectionAnimation';
import { dateFmt, FmtDate } from '@/utils/intl';
import { HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export const TimelineWrapper = ({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLUListElement>>) => (
  <ul className={twMerge('max-w-4xl mx-auto mb-14', className)} {...props}>
    {children}
  </ul>
);

interface TimelineItemProps extends HTMLAttributes<HTMLLIElement> {
  company?: ReactNode;
  position?: ReactNode;
  from?: FmtDate;
  to?: FmtDate;
}

export function TimelineItem({
  children,
  className,
  company,
  position,
  from,
  to,
  ...props
}: PropsWithChildren<TimelineItemProps>) {
  const { ref, className: animatedClassName } = useIntersectionAnimation<HTMLDivElement>({
    hidden: 'opacity-0 -translate-x-16',
    visible: 'opacity-100 translate-x-0',
    base: 'delay-300',
    threshold: 0.5,
  });

  return (
    <li
      className={twMerge(
        'relative mb-4 pl-60 before:absolute before:bg-blue-600 before:w-0.5 before:top-6 before:left-[205px] before:-bottom-12 last:before:h-0 after:absolute after:bg-blue-600 after:rounded-full after:w-4 after:h-4 after:left-[198px] after:top-6 after:shadow-md before:shadow',
        className
      )}
      {...props}
    >
      {(from || to) && (
        <div className="absolute left-0 pt-5 text-slate-600 text-right w-60 pr-16">
          {[from && dateFmt(from), to && dateFmt(to)].filter((v) => v).join(' - ')}
        </div>
      )}
      <div ref={ref} className={twMerge('p-6 bg-slate-100 rounded', animatedClassName)}>
        {company && <h3 className="text-3xl font-extrabold tracking-tighter mb-0.5">{company}</h3>}
        {position && <h4 className="text-blue-600 text-2xl font-extrabold tracking-tighter mb-4">{position}</h4>}
        {children}
      </div>
    </li>
  );
}
