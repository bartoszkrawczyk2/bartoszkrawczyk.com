import { ResumeEntry } from '@/data/resume';
import { useIntersectionAnimation } from '@/hooks/useIntersectionAnimation';
import { HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { Icon } from './icon/Icon';

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
  resume: ResumeEntry;
}

export function TimelineItem({ children, className, resume, ...props }: PropsWithChildren<TimelineItemProps>) {
  const { ref, className: animatedClassName } = useIntersectionAnimation<HTMLDivElement>({
    hidden: 'md:opacity-0 md:-translate-x-16',
    visible: 'md:opacity-100 md:translate-x-0',
    base: 'delay-300',
    threshold: 0.5,
  });

  return (
    <li
      className={twMerge(
        'relative mb-4 pl-8 md:pl-60 before:absolute before:bg-blue-600 before:w-0.5 before:top-6 before:left-2 md:before:left-[205px] before:-bottom-12 last:before:h-0 after:absolute after:bg-blue-600 after:rounded-full after:w-4 after:h-4 after:left-[1px] md:after:left-[198px] after:top-6 after:shadow-md before:shadow',
        className
      )}
      {...props}
    >
      {(resume.from || resume.to) && (
        <div className="md:absolute left-0 pt-5 text-slate-600 md:text-right w-60 md:pr-16 pb-4 md:pb-0">
          {[resume.from, resume.to].filter((v) => v).join(' - ')}
        </div>
      )}
      <div ref={ref} className={twMerge('p-6 bg-slate-100 rounded', animatedClassName)}>
        {resume.company && (
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tighter mb-0.5">{resume.company}</h3>
        )}
        {resume.position && (
          <h4 className="text-blue-600 text-lg sm:text-xl md:text-2xl font-extrabold tracking-tighter mb-4">
            {resume.position}
          </h4>
        )}
        {children}
        {!!resume.icons?.length && (
          <div className="flex flex-wrap gap-2 mt-6">
            {resume.icons.map((icon) => (
              <span key={icon} title={icon}>
                <Icon icon={icon} className="h-6 md:h-8" dimmed />
              </span>
            ))}
          </div>
        )}
      </div>
    </li>
  );
}
